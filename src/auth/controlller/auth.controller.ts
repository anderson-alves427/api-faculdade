import { SignInProfessorDTO } from '../dto/sign-in-professor.dto';
import { AuthService } from './../service/auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-professor')
  async signInProfessor(@Body() dto: SignInProfessorDTO): Promise<any> {
    return await this.authService.signInProfessor(dto);
  }
}
