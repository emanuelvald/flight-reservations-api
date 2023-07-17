import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from '@flight-reservations-api/common';
import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async create(createReservationDto: CreateReservationDto): Promise<any> {
    return await this.reservationRepository.create(createReservationDto);
  }
}
