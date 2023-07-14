import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from '@flight-reservations-api/common';
import { RpcException } from '@nestjs/microservices';
import { User } from './user.entity';
import { getHashedPassword } from './user.util';
import { UpdateUserPasswordDto } from '@flight-reservations-api/common/dto/user/update-user-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const { email, password } = createUserDto;
    const userExists: boolean = await this.validate('email', email);

    if (userExists) {
      throw new RpcException({
        statusCode: HttpStatus.FORBIDDEN,
        message: `Email ${createUserDto.email} is already in use`,
      });
    }

    const hashedPassword: string = await getHashedPassword(password);

    const newUser: User = new User();
    newUser.email = email;
    newUser.password = hashedPassword;

    return await this.userRepository.create(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string): Promise<any> {
    return await this.userRepository.findOneByEmail(email);
  }

  async validate(property: string, value: string): Promise<boolean> {
    return await this.userRepository.validate(property, value);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async updateUserPasswordByEmail(
    updateUserPasswordDto: UpdateUserPasswordDto,
  ): Promise<any> {
    const { email, password } = updateUserPasswordDto;
    const hashedPassword: string = await getHashedPassword(password);
    const user: User = new User();

    user.password = hashedPassword;

    return await this.userRepository.updateUserPasswordByEmail(email, user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
