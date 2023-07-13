import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { ProxyQueues } from '@flight-reservations-api/common';

async function bootstrap() {
  const configService: Record<string, any> = new ConfigService();
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: configService.get('AMQP_URL'),
        queue: ProxyQueues.USER,
      },
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen();
}

bootstrap();
