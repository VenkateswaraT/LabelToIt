import { ConflictException, Injectable } from '@nestjs/common';
import type { RegisterResponse } from './RegisterResponse';
import { PrismaService } from 'src/prisma.service';
import { RegisterDto } from './register.dto';
import { InternalServerErrorException } from '@nestjs/common';
// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });
    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword: string = await bcrypt.hash(registerDto.password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: hashedPassword,
      },
    });
    const { password, ...userWithoutPassword } = newUser;

    return {
      success: true,
      message: 'User registered successfully',
      user: userWithoutPassword,
    };
  }
}
