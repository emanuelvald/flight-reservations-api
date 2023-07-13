import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Unique('USR_UK', ['email'])
export class User {
  @PrimaryGeneratedColumn({
    name: 'usr_id',
    primaryKeyConstraintName: 'USR_PK',
  })
  @Generated('increment')
  id: number;

  @Column({
    name: 'usr_email',
    type: 'character varying',
    nullable: false,
  })
  email: string;

  @Column({ name: 'usr_password', type: 'character varying', nullable: false })
  password: string;

  @Column({
    name: 'usr_invite_code',
    type: 'character varying',
    nullable: true,
  })
  inviteCode: string;

  @Column({ name: 'usr_is_active', type: 'boolean', default: false })
  isActive: boolean;

  @CreateDateColumn({
    name: 'usr_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'usr_updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
