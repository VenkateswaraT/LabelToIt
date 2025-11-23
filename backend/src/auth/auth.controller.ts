import { Controller, Post, Body } from '@nestjs/common';
import { AuthControllerService } from './auth.service';
import { CreateUserDto } from './CreateUserDto.dto';
@Controller('/api/auth/')
export class AuthControllerController {
  constructor(private readonly authService: AuthControllerService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto): {
    success: boolean;
    message: string;
    user: { email: string; name: string };
  } {
    return {
      success: true,
      message: 'User registered',
      user: { email: createUserDto.email, name: createUserDto.name },
    };
  }
}
