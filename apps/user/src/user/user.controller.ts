import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateUserDto,
  UpdateUserDto,
  UserMessagePattern,
} from '@flight-reservations-api/common';
import { UpdateUserPasswordDto } from '@flight-reservations-api/common/dto/user/update-user-password.dto';

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
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern(UserMessagePattern.VALIDATE)
  validate() {
    return 'validate user';
  }

  @MessagePattern(UserMessagePattern.UPDATE)
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(UserMessagePattern.UPDATE_PASSWORD)
  updateUserPasswordByEmail(
    @Payload() updateUserPasswordDto: UpdateUserPasswordDto,
  ): Promise<any> {
    return this.userService.updateUserPasswordByEmail(updateUserPasswordDto);
  }

  @MessagePattern(UserMessagePattern.DELETE)
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
