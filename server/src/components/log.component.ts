import { LOG_BINDINGS } from '../config/constants';
import { ProviderMap } from '@loopback/core';
import { TimerProvider } from '../providers/timer.provider';
import { LogActionProvider } from '../providers/log-action.provider';
import { LogLevelProvider } from '../providers/log-level.provider';
import { Component } from '../decorators/component.decorator';

@Component
export class LogComponent {
  
  providers?: ProviderMap = {
    [LOG_BINDINGS.TIMER]: TimerProvider,
    [LOG_BINDINGS.LOG_ACTION]: LogActionProvider,
    [LOG_BINDINGS.APP_LOG_LEVEL]: LogLevelProvider,
  };
}
