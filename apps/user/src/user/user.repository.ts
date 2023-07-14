import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '@flight-reservations-api/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    return await this.userRepository
      .insert(createUserDto)
      .then(() => {
        return {
          statusCode: HttpStatus.CREATED,
          message: 'User created successfully',
        };
      })
      .catch(() => {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
        });
      });
  }

  async findOneByEmail(email: string): Promise<any> {
    return await this.userRepository
      .find({ where: { email: email } })
      .catch(() => {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
        });
      });
  }

  async validate(property: string, value: string): Promise<boolean> {
    return await this.userRepository
      .find({ where: { [property]: value.toString() } })
      .then((result: User[]) => {
        return !!result.length;
      })
      .catch(() => {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
        });
      });
  }

  async updateUserPasswordByEmail(email: string, user: User): Promise<any> {
    return this.userRepository.update({ email: email }, user);
  }
}
