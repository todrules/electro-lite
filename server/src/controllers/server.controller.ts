import { log } from '../decorators/log.decorator';
import { LOG_LEVEL } from '../config/constants';
import { get } from '@loopback/rest';
import { inject } from '@loopback/core';
import { api } from '@loopback/rest';
import { serverApi } from '../api/api';
import {
  authenticate,
  AuthenticationMetadata,
  AuthenticationBindings,
  UserProfile,
} from '@loopback/authentication';
import { UserRepo } from '../repositories/user.repo';
import { User } from '../models/user.models';

@api(serverApi)
export class ServerController {
  
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
    @inject('repositories.UserRepo') private repository: UserRepo) {
    
  }
  
  @authenticate('BasicStrategy')
  async helloWorld(name?: string) {
    return `Hello world ${name} ` + JSON.stringify(this.user);
  }
  
  @authenticate('BasicStrategy')
  async getUsers(name?: string): Promise<User[]> {
    let filter = name ? { where: { username: name } } : {};
    return await this.repository.find(filter);
  }
  
  @authenticate('BasicStrategy')
  async createUser(userInfo: Partial<User>) {
    return await this.repository.create(new User(userInfo));
  }
  
}
