import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInProfessorDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome de usuário do professsor',
    example: 'anderson',
  })
  usuario: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha do usuário',
    example: '1234',
  })
  senha: string;
}
