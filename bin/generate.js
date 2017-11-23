#!/usr/bin/env node
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const myArgs = require('optimist').argv;

let tempPath = '';
let tempName = '';

if (process.argv.length > 2) {
  
  if (myArgs[ 'name' ]) {
    console.log(myArgs[ 'name' ]);
    tempName = myArgs['name'].toLocaleLowerCase();
  }
  if(myArgs['path']) {
    console.log('path', path.resolve('./src', myArgs['path']));
    let newpath = path.resolve('./src', myArgs[ 'path' ]);
    if(!fs.existsSync(newpath)) {
      shell.mkdir('-p', newpath);
      if(fs.existsSync(newpath)) {
        console.log(chalk.green('Successfully created directories!!'));
        tempPath = newpath;
      } else {
        console.log(chalk.yellow('Uh-oh...'));
      }
    } else {
      tempPath = newpath;
      console.log(chalk.green('Found path!'));
    }
    
  }
  if (myArgs[ '_' ]) {
    let optArr = myArgs['_'];
    let all = false;
    for(let i = 0; i < optArr.length; i++) {
      if (optArr[i].toLocaleLowerCase() === 'all') {
        all = true;
        generateTemplates();
        break;
      }
      optArr[i] = optArr[i].toLocaleLowerCase();
    }
    if(!all) {
      generateTemplates(optArr);
    }
  }


} else {
  console.log(chalk.yellow('Missing CLI Options!!'));
  console.log(chalk.green('Ex. - ') + chalk.white('generate.js [NAME] --path=app/lib --all'));
}

function generateTemplates(args) {
  // if no args, generate all
  if(!args) {
   console.log(chalk.green('***GENERATING ALL TEMPLATES***'));
   generateAll(tempName);
  } else {
    args.forEach((arg, i) => {
      switch (arg) {
        case 'component':
          generateComponent(tempName);
          break;
        case 'module':
          generateModule(tempName);
          break;
        case 'service':
          generateService(tempName);
          break;
        default:
          console.log(chalk.yellow('Template type not found!'));
          break;
      }
    });
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateAll(name) {
  generateService(name);
  generateModule(name);
  generateComponent(name);
}

function generateService(servicename) {
  console.log(chalk.green('***GENERATING SERVICE***'));
  const NAME = servicename.toLocaleUpperCase();
  const name = servicename.toLocaleLowerCase();
  const Name = capitalize(servicename);
  
  let template = `import { Injectable } from '@angular/core';

@Injectable()
export class ${Name}Service {
  
  constructor() {
  
  }
}
  `;
  let filename = `${tempPath}\\${name}.service.ts`;
  fs.writeFile(filename, template, (err) => {
    if(err) {
      console.error(err);
    }
  });
}

function generateModule(modulename) {
  console.log(chalk.green('***GENERATING MODULE***'));
  const NAME = modulename.toLocaleUpperCase();
  const name = modulename.toLocaleLowerCase();
  const Name = capitalize(modulename);
  let template = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
  //  SharedModule
  ],
  declarations: [
  
  ],
  exports: [
    CommonModule,
  //  SharedModule
  ]
})
export class ${Name}Module {

}
  `;
  let filename = `${tempPath}\\${name}.module.ts`;
  fs.writeFile(filename, template, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function generateComponent(compname) {
  console.log(chalk.green('***GENERATING COMPONENT***'));
  const NAME = compname.toLocaleUpperCase();
  const name = compname.toLocaleLowerCase();
  const Name = capitalize(compname);
  let template = `import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-${name}',
  templateUrl: './${name}.template.html',
  styleUrls: ['./${name}.styles.scss']
})
export class ${Name}Component implements OnInit, AfterViewInit {

  constructor() {
  
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
  
  };
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    setTimeout(() => {
      // do something
    });
  };

}
  `;
  
  let filename = `${tempPath}\\${name}.component.ts`;
  fs.writeFile(filename, template, (err) => {
    if (err) {
      console.error(err);
    }
  });
  let blank = '';
  filename = `${tempPath}\\${name}.template.html`;
  fs.writeFile(filename, blank, (err) => {
    if (err) {
      console.error(err);
    }
  });
  
  filename = `${tempPath}\\${name}.styles.scss`;
  fs.writeFile(filename, blank, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
