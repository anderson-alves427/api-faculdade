import { IsNotEmpty, IsString } from 'class-validator';

export class SignInProfessorDTO {
  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
