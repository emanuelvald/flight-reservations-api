import { Injectable } from '@nestjs/common';
import {
  InactiveDto,
  LoginDto,
  SignupDto,
} from '@flight-reservations-api/common';

@Injectable()
export class AuthService {
  async signup(signupDto: SignupDto): Promise<any> {
    return 'Signup';
  }

  async login(loginDto: LoginDto): Promise<any> {
    return 'login';
  }

  async inactive(inactiveDto: InactiveDto): Promise<any> {
    return 'inactive';
  }
}
