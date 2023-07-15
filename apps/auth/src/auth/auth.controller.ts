import { Controller } from '@nestjs/common';
import {
  AuthMessagePattern,
  InactiveDto,
  LoginDto,
  SignupDto,
} from '@flight-reservations-api/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(AuthMessagePattern.SIGNUP)
  signup(@Payload() signupDto: SignupDto): Promise<any> {
    return this.authService.signup(signupDto);
  }

  @MessagePattern(AuthMessagePattern.LOGIN)
  login(@Payload() loginDto: LoginDto): Promise<any> {
    return this.authService.login(loginDto);
  }

  @MessagePattern(AuthMessagePattern.INACTIVE)
  inactive(@Payload() inactiveDto: InactiveDto): Promise<any> {
    return this.authService.inactive(inactiveDto);
  }
}
