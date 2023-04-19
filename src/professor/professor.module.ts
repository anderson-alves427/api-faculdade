import { Module } from '@nestjs/common';
import { ProfessorController } from './controller/professor.controller';
import { ProfessorService } from './service/professor.service';
import { ProfessorRepository } from './repository/professor.repository';
import { ProfessorEntity } from './entity/professor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessorEntity])],
  controllers: [ProfessorController],
  providers: [ProfessorService, ProfessorRepository],
  exports: [ProfessorRepository],
})
export class ProfessorModule {}
