import { Body, Controller, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { Observable } from 'rxjs';
import { CreateUserI } from './interfaces/create-user.interface';
import {
  CreateUserDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';
import { UpdateUserPasswordDto } from '@flight-reservations-api/common/dto/user/update-user-password.dto';

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

  @Put('update-password')
  updateUserPasswordByEmail(
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ): Observable<any> {
    return this._clientProxyUser.send(
      UserMessagePattern.UPDATE_PASSWORD,
      updateUserPasswordDto,
    );
  }
}
