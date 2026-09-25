import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  //Pour que le hash du mot de passe ne soit pas envoyé dans le json, fonctionne avec l'import dans le main.ts

  @Exclude()
  @Column()
  password: string;
}
