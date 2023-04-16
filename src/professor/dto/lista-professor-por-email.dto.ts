import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListaProfessorPorEmailDTO {
  @ApiProperty({ description: 'Email do professor' })
  @IsString()
  email: string;
}
