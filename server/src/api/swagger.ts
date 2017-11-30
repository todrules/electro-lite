import * as lbOpenApiSpec from '@loopback/openapi-spec';
import { OpenApiSpec } from '@loopback/openapi-spec';
import { serverApi } from './api';

export let ApiSpec = lbOpenApiSpec.createEmptyApiSpec();
ApiSpec.info = {
  title: 'Hello World API',
  version: '1.0',
};
ApiSpec.swagger = '2.0';
ApiSpec.basePath = '/';
ApiSpec.definitions = {
  user: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID for a user instance.',
      },
      username: {
        type: 'string',
        description: 'The username for a user instance.',
      },
    },
    required: ['username'],
    example: {
      username: 'Ted',
    },
  },
};

ApiSpec = Object.assign({}, ApiSpec, serverApi);
