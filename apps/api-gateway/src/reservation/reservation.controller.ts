import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateReservationDto,
  ProxyQueues,
  ReservationMessagePattern,
} from '@flight-reservations-api/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { Observable } from 'rxjs';

@Controller(ProxyQueues.RESERVATION)
export class ReservationController {
  private _clientProxyReservation: ClientProxy =
    this.clientProxyFlightReservations.reservation();

  constructor(
    private readonly clientProxyFlightReservations: ClientProxyFlightReservations,
  ) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto): Observable<any> {
    return this._clientProxyReservation.send(
      ReservationMessagePattern.CREATE,
      createReservationDto,
    );
  }
}
