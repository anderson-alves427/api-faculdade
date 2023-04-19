import { IsNotEmpty, IsString } from 'class-validator';

export class SignInProfessorDTO {
  @IsString()
  @IsNotEmpty()
  email: string;
}
