import { Controller } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';

@Controller('user')
export class UserController {
  private _clientProxyUser: ClientProxy = this.clientProxyEvents.user();

  constructor(
    private readonly clientProxyEvents: ClientProxyFlightReservations,
  ) {}
}
