import { ApiProperty } from '@nestjs/swagger';

export class ResponseSignInProfessorDTO {
  @ApiProperty({
    description: 'Token do usuário',
  })
  token: string;
}
