import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { Observable } from 'rxjs';
import {
  AuthMessagePattern,
  InactiveDto,
  SignInDto,
  SignUpDto,
} from '@flight-reservations-api/common';

@Controller('auth')
export class AuthController {
  private _clientProxyAuth: ClientProxy =
    this.clientProxyFlightReservations.auth();

  constructor(
    private readonly clientProxyFlightReservations: ClientProxyFlightReservations,
  ) {}

  @Post(AuthMessagePattern.SIGNUP)
  signUp(@Body() signUpDto: SignUpDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.SIGNUP, signUpDto);
  }

  @Post(AuthMessagePattern.SIGNIN)
  signIn(@Body() signInDto: SignInDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.SIGNIN, signInDto);
  }

  @Delete(AuthMessagePattern.INACTIVE)
  inactive(@Body() inactiveDto: InactiveDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.INACTIVE, inactiveDto);
  }
}
