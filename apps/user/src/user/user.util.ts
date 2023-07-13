import { hash } from 'bcrypt';
import { saltOrRounds } from '@flight-reservations-api/common';
import { RpcException } from '@nestjs/microservices';
import { HttpStatus } from '@nestjs/common';

export async function getHashedPassword(password: string): Promise<string> {
  return await hash(password, saltOrRounds).catch(() => {
    throw new RpcException({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
    });
  });
}
