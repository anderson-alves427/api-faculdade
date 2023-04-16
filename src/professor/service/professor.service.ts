import { Injectable } from '@nestjs/common';
import { ProfessorRepository } from '../repository/professor.repository';
import { ListaProfessorPorEmailDTO } from '../dto/lista-professor-por-email.dto';

@Injectable()
export class ProfessorService {
  constructor(
    private readonly professorRepository: ProfessorRepository, // import as usual
  ) {}
  async getListaProfessor(dto: ListaProfessorPorEmailDTO): Promise<any> {
    return await this.professorRepository.findByEmail(dto.email);
  }
}
