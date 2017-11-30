import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models/user.models';
import { db } from '../datasources/db.datasources';

export class UserRepo extends DefaultCrudRepository<User,
  typeof User.prototype.id> {
  constructor() {
    super(User, db);
  }
}
