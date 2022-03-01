import { Injectable } from '@nestjs/common';
import { UserRepository } from '../entities/users/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UserRepository) {}

  getAll() {
    return this.userRepo.find();
  }
}
