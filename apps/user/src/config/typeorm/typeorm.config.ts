import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../../user/user.entity';

const configService: Record<string, any> = new ConfigService();

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: configService.get('USER_TYPEORM_TYPE'),
      host: configService.get('USER_TYPEORM_HOST'),
      port: configService.get('USER_TYPEORM_PORT'),
      username: configService.get('USER_TYPEORM_USERNAME'),
      password: configService.get('USER_TYPEORM_PASSWORD'),
      database: configService.get('USER_TYPEORM_DATABASE'),
      entities: [User],
      //migrations: ['src/infrastructure/orm/typeorm/migrations/*.ts'],
      synchronize: configService.get('USER_TYPEORM_SYNCHRONIZE'),
      logging: configService.get('USER_TYPEORM_LOGGING'),
    };
  }
}
