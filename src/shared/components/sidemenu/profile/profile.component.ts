import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.styles.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  
  public avatar: string;
  public name: {
    firstName: string; lastName: string;
  }
  public address: {
    city: string; state: string;
  }
  
  constructor() {
    this.avatar = 'assets/images/user/07.jpg';
    this.name = {
      firstName: 'Marley',
      lastName: 'Campbell'
    };
    this.address = {
      city: 'San Clemente',
      state: 'CA'
    };
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
