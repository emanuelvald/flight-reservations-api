import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientProxyFlightReservations } from '../proxy/client-proxy-flight-reservations.service';

@Module({
  controllers: [UserController],
  providers: [ClientProxyFlightReservations],
})
export class UserModule {}
