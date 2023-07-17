import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  InactiveDto,
  ProxyQueues,
  SignInDto,
  SignUpDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { firstValueFrom, Observable } from 'rxjs';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ProxyQueues.USER) private readonly userService: ClientProxy,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<any> {
    const obs$: Observable<any> = this.userService.send(
      UserMessagePattern.CREATE,
      signUpDto,
    );

    return await firstValueFrom(obs$).catch((err) => {
      throw new RpcException(err);
    });
  }

  async signIn(signInDto: SignInDto): Promise<any> {
    const { email, password } = signInDto;
    const user = await this.validateUser(email, password);
    const payload = { userId: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async inactive(inactiveDto: InactiveDto): Promise<any> {
    return 'inactive';
  }

  async validateUser(email: string, password: string): Promise<any> {
    const obs$: Observable<any> = this.userService.send(
      UserMessagePattern.FIND_ONE_BY_EMAIL,
      email,
    );

    const user = await firstValueFrom(obs$).catch((err) => {
      throw new RpcException(err);
    });

    if (!user) {
      throw new RpcException({
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        message: 'email or password are incorrect',
      });
    }

    const validatePassword: boolean = await compare(password, user.password);

    if (!validatePassword) {
      throw new RpcException({
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        message: 'email or password are incorrect',
      });
    }

    return user;
  }
}
