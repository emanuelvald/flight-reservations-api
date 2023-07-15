import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class InactiveDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
