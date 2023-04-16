import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessorEntity } from '../entity/professor.entity';

export class ProfessorRepository extends Repository<ProfessorEntity> {
  constructor(
    @InjectRepository(ProfessorEntity)
    private professorRepository: Repository<ProfessorEntity>,
  ) {
    super(
      professorRepository.target,
      professorRepository.manager,
      professorRepository.queryRunner,
    );
  }

  async findByEmail(email: string): Promise<ProfessorEntity[]> {
    const teste = await this.professorRepository.find();

    return teste;
  }
}
