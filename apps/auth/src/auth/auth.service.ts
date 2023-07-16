import { Inject, Injectable } from '@nestjs/common';
import {
  InactiveDto,
  LoginDto,
  ProxyQueues,
  SignupDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ProxyQueues.USER) private readonly userService: ClientProxy,
  ) {}

  async signup(signupDto: SignupDto): Promise<any> {
    const obs$: Observable<any> = this.userService.send(
      UserMessagePattern.CREATE,
      signupDto,
    );

    return await firstValueFrom(obs$).catch((err) => {
      throw new RpcException(err);
    });
  }

  async login(loginDto: LoginDto): Promise<any> {
    return 'login';
  }

  async inactive(inactiveDto: InactiveDto): Promise<any> {
    return 'inactive';
  }
}
