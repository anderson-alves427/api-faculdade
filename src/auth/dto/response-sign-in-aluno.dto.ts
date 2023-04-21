import { ApiProperty } from '@nestjs/swagger';

export class ResponseSignInAlunoDTO {
  @ApiProperty({
    description: 'Token do usuário',
  })
  token: string;
}
