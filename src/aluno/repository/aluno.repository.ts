import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlunoEntity } from '../entity/aluno.entity';

export class AlunoRepository extends Repository<AlunoEntity> {
  constructor(
    @InjectRepository(AlunoEntity)
    private professorRepository: Repository<AlunoEntity>,
  ) {
    super(
      professorRepository.target,
      professorRepository.manager,
      professorRepository.queryRunner,
    );
  }
}
