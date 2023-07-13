import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ProxyQueues } from '@flight-reservations-api/common';

@Injectable()
export class ClientProxyFlightReservations {
  constructor(private readonly configService: ConfigService) {}

  user(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.configService.get('AMQP_URL'),
        queue: ProxyQueues.USER,
      },
    });
  }
}
