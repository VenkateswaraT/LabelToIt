import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }): string =>
    value.toLowerCase().trim(),
  )
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(8)
  @IsStrongPassword({ minLength: 8 })
  password: string;
}
