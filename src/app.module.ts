import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorEntity } from './professor/entity/professor.entity';
import { ProfessorModule } from './professor/professor.module';
import { AuthModule } from './auth/auth.module';
import { AlunoModule } from './aluno/aluno.module';
import { AlunoEntity } from './aluno/entity/aluno.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'faculdadetst',
      entities: [ProfessorEntity, AlunoEntity],
    }),
    ProfessorModule,
    AuthModule,
    AlunoModule,
  ],
})
export class AppModule {}
