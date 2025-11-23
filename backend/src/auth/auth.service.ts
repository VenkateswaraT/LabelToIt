import { Injectable } from '@nestjs/common';
import type { RegisterResponse } from './RegisterResponse';
@Injectable()
export class AuthService {
  register(registerDto: { email: string; name: string }): RegisterResponse {
    return {
      success: true,
      message: 'User registered',
      user: { email: registerDto.email, name: registerDto.name },
    };
  }
}
