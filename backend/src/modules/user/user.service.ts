import { Injectable } from '@nestjs/common';
import { UserResponse, UserRequest } from './user.interface';

@Injectable()
export class UserService {
  async getUser(data: UserRequest): Promise<UserResponse> {
    return { id: data.id, name: 'John Doe', email: 'john@example.com' };
  }
}
