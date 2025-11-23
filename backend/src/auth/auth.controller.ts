import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { RegisterResponse } from './RegisterResponse';
import { RegisterDto } from './register.dto';
@Controller('/api/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto): RegisterResponse {
    return this.authService.register(registerDto);
  }
}
