import { Inject, Injectable, Scope } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  private readonly userRepository: Repository<User>;

  constructor(@Inject('CONNECTION') connection: Connection) {
    this.userRepository = connection.getRepository(User);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
