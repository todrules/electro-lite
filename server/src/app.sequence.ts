import {
  RestBindings,
  FindRoute,
  InvokeMethod,
  ParseParams,
  parseOperationArgs,
  ParsedRequest,
  Reject,
  Send,
  ServerResponse,
  SequenceHandler,
} from '@loopback/rest';
import { inject } from '@loopback/core';

const CoreSequenceActions = RestBindings.SequenceActions;

import { AuthenticateFn, AuthenticationBindings } from '@loopback/authentication';

export class AppSequence implements SequenceHandler {
  
  constructor(
    @inject(CoreSequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(CoreSequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(CoreSequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(CoreSequenceActions.SEND) protected send: Send,
    @inject(CoreSequenceActions.REJECT) protected reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION) protected authenticateRequest: AuthenticateFn) {
  }
  
  async handle(req: ParsedRequest, res: ServerResponse) {
    const route = this.findRoute(req);
    
    req = AppSequence.setFakeAuthorizationHeader(req);
    
    let user;
    this.authenticateRequest(req).then(response => user = response).catch(err => this.reject(res, req, err));
    
    this.parseParams(req, route)
      .then(args => this.invoke(route, args)
        .then(result => this.send(res, result))
      .catch(err => this.reject(res, req, err)));
  }
  
  private static setFakeAuthorizationHeader(req: ParsedRequest) {
    let parts = [
      'Basic',
      'YTph',
    ];
    req.headers['authorization'] = parts.join(' ');
    return req;
  }
}


