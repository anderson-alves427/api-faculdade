import { Module } from '@nestjs/common';
import { AlunoRepository } from './repository/aluno.repository';
import { AlunoController } from './controller/aluno.controller';
import { AlunoService } from './service/aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoEntity } from './entity/aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlunoEntity])],
  controllers: [AlunoController],
  providers: [AlunoService, AlunoRepository],
  exports: [AlunoRepository],
})
export class AlunoModule {}
