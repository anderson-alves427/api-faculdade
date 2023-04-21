import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SignInProfessorDTO } from '../dto/sign-in-professor.dto';
import { AuthService } from './../service/auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ResponseSignInProfessorDTO } from '../dto/response-sign-in-professor.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-professor')
  @ApiOperation({ description: 'Realiza login do professor' })
  @ApiCreatedResponse({
    description: 'Token de acesso',
    type: ResponseSignInProfessorDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @ApiResponse({
    status: 400,
    description: 'Usuário ou senha inválida',
  })
  @ApiResponse({
    status: 500,
    description: 'Ocorreu um erro ao fazer o login',
  })
  async signInProfessor(
    @Body() dto: SignInProfessorDTO,
  ): Promise<ResponseSignInProfessorDTO> {
    return await this.authService.signInProfessor(dto);
  }
}
