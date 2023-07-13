import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const configService: Record<string, any> = new ConfigService();
  const app: INestApplication = await NestFactory.create(ApiGatewayModule);

  app
    .useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    .useGlobalFilters(new HttpExceptionFilter());

  await app.listen(configService.get('PORT'));
}

bootstrap();
