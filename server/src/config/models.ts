import { ParsedRequest, OperationArgs } from '@loopback/rest';
import { Observable } from 'rxjs/Observable';

export interface LogFn {
  (req: ParsedRequest,
    args: OperationArgs,
    result: any,
    startTime?: HighResTime): Promise<void>;
  
  startTimer(): HighResTime;
}

export type LevelMetadata = { level: number };
export type HighResTime = [number, number]; // [seconds, nanoseconds]
export type TimerFn = (start?: HighResTime) => HighResTime;

export interface AppConfig {
  servers: Observable<any>[];
  ports: number[];
  names: string[];
  types: any
}

export interface ServerInst {
  port: number;
  name: string;
  type:
}
