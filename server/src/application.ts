import { Application } from '@loopback/core';
import { RestBindings, RestComponent, RestServer } from '@loopback/rest';
import { ServerController } from './controllers/server.controller';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

import { Observable } from 'rxjs/Observable';
import { UserRepo } from './repositories/user.repo';
import { ApiSpec } from './api/swagger';
import { AuthProvider } from './providers/auth.provider';
import { AppSequence } from './app.sequence';
import { RepositoryMixin } from '@loopback/repository';
import { AppConfig } from './config/models';




export class AppMain extends RepositoryMixin(Application) {
  
  appOptions: AppConfig = {
    servers: [],
    ports: [],
    names: []
  }
  constructor(options: AppConfig) {
    super({
      components: [AuthenticationComponent, RestComponent],
      controllers: [ServerController],
      servers: {
        'public': RestServer,
        'restricted': RestServer,
      },
      repositories: [UserRepo]
    });
    this.appOptions = options;
    
  }
  
  public startApp = async () => {
  
    AppServers.names.forEach((name, index) => {
      const server = Observable.fromPromise(this.getServer(name));
      AppServers.servers.push(server);
    });
    this.setupServers(AppServers);
  
  };
  
  private setupServers = (appServers: ServerConfig) => {
    let servers = appServers;
    forkJoin(appServers.servers).subscribe((results: any) => {
      let boundServers = [];
      results.forEach((result, index) => {
        let server = this.bindServer(result, appServers['ports'][index]);
        result.sequence(AppSequence);
        result.api(ApiSpec);
        result.bind(AuthenticationBindings.STRATEGY).toProvider(AuthProvider);
        boundServers.push(server);
      });
      this.startServers(boundServers, servers);
    });
  };
  
  private bindServer = (server: any, port: number): Observable<any> => {
    server.bind(RestBindings.PORT).to(port);
    return this.getPorts(server);
  };
  
  private getPorts = (server: any): Observable<any> => {
    return Observable.fromPromise(server.get('rest.port'));
  };
  
  private startServers = (servers: Observable<any>[], appServers: ServerConfig) => {
    forkJoin(servers).subscribe((ports) => {
      super.start();
      ports.forEach((port, index) => {
        console.log(`${appServers['names'][index]} server running on port: ${port}`);
      });
    });
  };
  
  public stopApp = async () => {
    console.log('Server is shutting down...')
    await super.stop();
  }
}
