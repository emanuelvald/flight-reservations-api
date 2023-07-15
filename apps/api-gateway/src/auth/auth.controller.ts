import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { Observable } from 'rxjs';
import {
  AuthMessagePattern,
  InactiveDto,
  LoginDto,
  SignupDto,
} from '@flight-reservations-api/common';

@Controller('auth')
export class AuthController {
  private _clientProxyAuth: ClientProxy =
    this.clientProxyFlightReservations.auth();

  constructor(
    private readonly clientProxyFlightReservations: ClientProxyFlightReservations,
  ) {}

  @Post(AuthMessagePattern.SIGNUP)
  signup(@Body() signupDto: SignupDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.SIGNUP, signupDto);
  }

  @Post(AuthMessagePattern.LOGIN)
  login(@Body() loginDto: LoginDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.LOGIN, loginDto);
  }

  @Delete(AuthMessagePattern.INACTIVE)
  inactive(@Body() inactiveDto: InactiveDto): Observable<any> {
    return this._clientProxyAuth.send(AuthMessagePattern.INACTIVE, inactiveDto);
  }
}
