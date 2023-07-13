import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProxyModule } from './proxy/proxy.module';
import { UserModule } from './user/user.module';
import { ClientProxyFlightReservations } from './proxy/client-proxy-flight-reservations.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development'],
    }),
    ProxyModule,
    UserModule,
  ],
  controllers: [],
  providers: [ClientProxyFlightReservations],
})
export class ApiGatewayModule {}
