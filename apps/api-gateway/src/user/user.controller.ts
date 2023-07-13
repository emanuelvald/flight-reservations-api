import { Body, Controller, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { Observable } from 'rxjs';
import { CreateUserI } from './interfaces/create-user.interface';
import {
  CreateUserDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';

@Controller('user')
export class UserController {
  private _clientProxyUser: ClientProxy = this.clientProxyEvents.user();

  constructor(
    private readonly clientProxyEvents: ClientProxyFlightReservations,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<CreateUserI> {
    return this._clientProxyUser.send(UserMessagePattern.CREATE, createUserDto);
  }
}
