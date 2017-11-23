import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AppState, SidenavEnum } from '../../config/models/interfaces';



export const initialAppState: AppState = {
  isLoading: false,
  pageTitle: 'My App',
  sideNav: {
    state: SidenavEnum.open,
    isOpen: true,
    displayHeader: true
  },
  user: {
    isAuth: false,
    email: null,
    password: null,
    name: {
      firstName: 'Anonymous User',
      lastName: null,
      nickName: null
    }
  }
};

export let INIT_APP_STATE = new InjectionToken<AppState>('app.state');


@Injectable()
export class AppStateService {
  
  public state = new BehaviorSubject<AppState>(initialAppState);
  
  private readonly errMsg = 'Houston, we have a problem (AppStateService)';
  
  constructor(@Inject(INIT_APP_STATE) config: AppState) {
    
    this.init(config);
  }
  
  private init = (config) => {
    this.setState(config);
  };
  
  // Creates an Observable called 'changes'
  // Subscribe to 'changes' to rcv updates to state
  public changes = this.state.asObservable().distinctUntilChanged()
    .do((changes) => {
      console.log(changes);
    });
  
  public getState = () => {
    return this.state.value;
  };
  
  public setState = (state: AppState) => {
    
    // The 'next' method will also trigger 'changes' to emit the new values
    this.state.next(state);
  };
  
  // Helper methods to update loading status
  public startLoading = () => {
    let state = Object.assign({}, this.getState());
    state.isLoading = true;
    this.setState(state);
  };
  
  public stopLoading = () => {
    let state = Object.assign({}, this.getState());
    state.isLoading = false;
    this.setState(state);
  };
}
