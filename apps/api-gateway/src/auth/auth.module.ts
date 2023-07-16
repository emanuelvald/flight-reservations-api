import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';

@Module({
  controllers: [AuthController],
  providers: [ClientProxyFlightReservations],
})
export class AuthModule {}
