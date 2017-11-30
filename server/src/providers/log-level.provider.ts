import { Provider } from '@loopback/context';
import { LOG_LEVEL } from '../config/constants';

export class LogLevelProvider implements Provider<number> {
  
  constructor() {
  
  }
  
  value(): number {
    return LOG_LEVEL.WARN;
  }
}
