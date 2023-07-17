import { Controller } from '@nestjs/common';
import {
  AuthMessagePattern,
  InactiveDto,
  SignInDto,
  SignUpDto,
} from '@flight-reservations-api/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(AuthMessagePattern.SIGNUP)
  signUp(@Payload() signUpDto: SignUpDto): Promise<any> {
    return this.authService.signUp(signUpDto);
  }

  @MessagePattern(AuthMessagePattern.SIGNIN)
  signIn(@Payload() logInDto: SignInDto): Promise<any> {
    return this.authService.signIn(logInDto);
  }

  @MessagePattern(AuthMessagePattern.INACTIVE)
  inactive(@Payload() inactiveDto: InactiveDto): Promise<any> {
    return this.authService.inactive(inactiveDto);
  }
}
