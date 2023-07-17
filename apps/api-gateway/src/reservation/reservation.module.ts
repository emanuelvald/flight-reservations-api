import { Module } from '@nestjs/common';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';
import { ReservationController } from './reservation.controller';

@Module({
  controllers: [ReservationController],
  providers: [ClientProxyFlightReservations],
})
export class ReservationModule {}
