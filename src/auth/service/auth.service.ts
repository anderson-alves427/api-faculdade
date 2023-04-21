import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProfessorRepository } from 'src/professor/repository/professor.repository';
import { SignInProfessorDTO } from '../dto/sign-in-professor.dto';
import { JwtService } from '@nestjs/jwt';
import { ResponseSignInProfessorDTO } from '../dto/response-sign-in-professor.dto';
import { SignInAlunoDTO } from '../dto/sign-in-aluno.dto';
import { ResponseSignInAlunoDTO } from '../dto/response-sign-in-aluno.dto';
import { AlunoRepository } from 'src/aluno/repository/aluno.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly professorRepository: ProfessorRepository,
    private readonly alunoRepository: AlunoRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signInProfessor({
    usuario,
    senha,
  }: SignInProfessorDTO): Promise<ResponseSignInProfessorDTO> {
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
        token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Ocorreu um erro ao fazer o login',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async signInAluno({
    usuario,
    senha,
  }: SignInAlunoDTO): Promise<ResponseSignInAlunoDTO> {
    try {
      const user = await this.alunoRepository.findOneBy({ usuario });
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
        token: await this.jwtService.signAsync(payload),
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
