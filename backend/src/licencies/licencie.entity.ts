import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ceinture } from '../common/enums/ceinture.enums';
import { User } from '../users/user.entity';

@Entity()
export class Licencies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  poids: number;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: Ceinture })
  ceinture: Ceinture;

  @Column({ default: false })
  cotisationPaid: boolean;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
