import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(8)
  @IsStrongPassword({ minLength: 8 })
  password: string;
}
