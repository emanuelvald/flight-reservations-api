import { Module } from '@nestjs/common';
import { ClientProxyFlightReservations } from './client-proxy-flight-reservations.service';

@Module({
  providers: [ClientProxyFlightReservations],
  exports: [ClientProxyFlightReservations],
})
export class ProxyModule {}
