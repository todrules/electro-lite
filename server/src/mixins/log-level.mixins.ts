import { Constructor } from '@loopback/context';
import { LOG_BINDINGS } from '../config/constants';

export function LogLevelMixin<T extends Constructor<any>>(superClass: T) {
  
  return class extends superClass {
    
    constructor(...args: any[]) {
      super(...args);
      
      if (!this.options) this.options = {};
      
      if (this.options.logLevel) {
        this.logLevel(this.options.logLevel);
      }
    }
    
    logLevel(level: number) {
      this.bind(LOG_BINDINGS.APP_LOG_LEVEL).to(level);
    }
  };
}
