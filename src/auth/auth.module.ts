import { Module } from '@nestjs/common';
import { AuthController } from './controlller/auth.controller';
import { AuthService } from './service/auth.service';
import { ProfessorModule } from 'src/professor/professor.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { AlunoModule } from 'src/aluno/aluno.module';

@Module({
  imports: [
    ProfessorModule,
    AlunoModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
