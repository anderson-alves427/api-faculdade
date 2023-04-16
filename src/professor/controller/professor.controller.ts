import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfessorService } from './../service/professor.service';
import { Controller, Get, Query } from '@nestjs/common';
import { ListaProfessorPorEmailDTO } from '../dto/lista-professor-por-email.dto';

@ApiTags('Professor')
@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @ApiOperation({ description: 'lista professor pelo email' })
  @Get('lista-email')
  async getListaProfessor(
    @Query() dto: ListaProfessorPorEmailDTO,
  ): Promise<any> {
    return await this.professorService.getListaProfessor(dto);
  }
}
