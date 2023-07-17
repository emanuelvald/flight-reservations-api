import { Controller } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateReservationDto,
  ReservationMessagePattern,
} from '@flight-reservations-api/common';

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @MessagePattern(ReservationMessagePattern.CREATE)
  create(@Payload() createReservationDto: CreateReservationDto): Promise<any> {
    return this.reservationService.create(createReservationDto);
  }
}
