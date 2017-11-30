import { LOG_LEVEL, LOG_BINDINGS } from '../config/constants';
import { Constructor, Reflector } from '@loopback/context';
import { LevelMetadata } from '../config/models';

export function log(level?: number) {
  return function (target: Object, methodName: string): void {
    if (level === undefined) level = LOG_LEVEL.WARN;
    Reflector.defineMetadata(
      LOG_BINDINGS.METADATA,
      { level },
      target,
      methodName,
    );
  };
}

export function getLogMetadata(controllerClass: Constructor<{}>,
  methodName: string,): LevelMetadata {
  return Reflector.getMetadata(
    LOG_BINDINGS.METADATA,
    controllerClass.prototype,
    methodName,
  );
}
