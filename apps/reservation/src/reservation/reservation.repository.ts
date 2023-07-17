import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from '@flight-reservations-api/common';
import { RpcException } from '@nestjs/microservices';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationRepository {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<any> {
    return await this.reservationRepository
      .insert(createReservationDto)
      .then(() => {
        return {
          statusCode: HttpStatus.CREATED,
          message: 'Reservation created successfully',
        };
      })
      .catch(() => {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
        });
      });
  }
}
