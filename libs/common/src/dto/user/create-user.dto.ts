import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  passwordMaxLength,
  passwordMinLength,
} from '@flight-reservations-api/common/const/user/user.constant';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(passwordMinLength, {
    message: `Password is shorter than the minimum allowed length ${passwordMinLength}`,
  })
  @MaxLength(passwordMaxLength, {
    message: `Password is higher than the maximum allowed length ${passwordMaxLength}`,
  })
  password: string;

  @IsOptional()
  @IsString()
  inviteCode: string;
}
