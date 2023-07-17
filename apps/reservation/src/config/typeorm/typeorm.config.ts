import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Reservation } from '../../reservation/reservation.entity';

const configService: Record<string, any> = new ConfigService();

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: configService.get('RESERVATION_TYPEORM_TYPE'),
      host: configService.get('RESERVATION_TYPEORM_HOST'),
      port: configService.get('RESERVATION_TYPEORM_PORT'),
      username: configService.get('RESERVATION_TYPEORM_USERNAME'),
      password: configService.get('RESERVATION_TYPEORM_PASSWORD'),
      database: configService.get('RESERVATION_TYPEORM_DATABASE'),
      entities: [Reservation],
      //migrations: ['src/infrastructure/orm/typeorm/migrations/*.ts'],
      synchronize: configService.get('RESERVATION_TYPEORM_SYNCHRONIZE'),
      logging: configService.get('RESERVATION_TYPEORM_LOGGING'),
    };
  }
}
