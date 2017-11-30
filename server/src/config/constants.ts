export namespace LOG_BINDINGS {
  export const METADATA = 'log.metadata';
  export const APP_LOG_LEVEL = 'log.level';
  export const TIMER = 'log.timer';
  export const LOG_ACTION = 'log.action';
}

export enum LOG_LEVEL {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  OFF
}
