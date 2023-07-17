import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateUserDto,
  UpdateUserDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMessagePattern.CREATE)
  create(@Payload() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.create(createUserDto);
  }

  @MessagePattern(UserMessagePattern.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMessagePattern.FIND_ONE_BY_ID)
  findOneById(@Payload() id: number) {
    return this.userService.findOneById(id);
  }

  @MessagePattern(UserMessagePattern.FIND_ONE_BY_EMAIL)
  findOneByEmail(@Payload() email: string) {
    return this.userService.findOneByEmail(email);
  }

  @MessagePattern(UserMessagePattern.UPDATE)
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(UserMessagePattern.DELETE)
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
