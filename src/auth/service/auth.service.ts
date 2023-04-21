import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProfessorRepository } from 'src/professor/repository/professor.repository';
import { SignInProfessorDTO } from '../dto/sign-in-professor.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly professorRepository: ProfessorRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signInProfessor({ usuario, senha }: SignInProfessorDTO): Promise<any> {
    try {
      const user = await this.professorRepository.findOneBy({ usuario });
      if (!user) {
        throw new HttpException(
          'Usuário não encontrado.',
          HttpStatus.NOT_FOUND,
        );
      }

      if (user.senha !== senha) {
        throw new HttpException(
          'Usuário ou senha inválida',
          HttpStatus.BAD_REQUEST,
        );
      }
      const payload = { username: user.email, sub: user.id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Ocorreu um erro ao fazer o login',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
