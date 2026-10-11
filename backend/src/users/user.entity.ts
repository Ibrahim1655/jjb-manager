import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from '../common/enums/role.enum';
import { Licencies } from '../licencies/licencie.entity';

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

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.LICENCIE,
  })
  role: Role;

  @OneToOne(() => Licencies, (licencie) => licencie.user)
  licencie: Licencies;
}
