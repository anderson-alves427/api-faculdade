import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'aluno' })
export class AlunoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data: Date;

  @Column()
  usuario: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
