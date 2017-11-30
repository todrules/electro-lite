import { Component } from '@loopback/core';

export function Component<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor implements Component {
  
  }
}
