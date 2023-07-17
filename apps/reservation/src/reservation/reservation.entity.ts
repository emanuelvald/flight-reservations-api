import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('reservations')
@Unique('UK_RES', ['code', 'flight', 'passenger', 'row', 'seat'])
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'res_id',
    primaryKeyConstraintName: 'PK_RES',
  })
  @Generated('increment')
  id: number;

  @Column({
    name: 'res_code',
    type: 'character varying',
    nullable: false,
  })
  code: string;

  @Column({
    name: 'fli_id',
    type: 'integer',
    nullable: false,
  })
  flight: number;

  @Column({
    name: 'pas_id',
    type: 'integer',
    nullable: false,
  })
  passenger: number;

  @Column({
    name: 'res_row',
    type: 'integer',
    nullable: false,
  })
  row: number;

  @Column({
    name: 'res_seat',
    type: 'character varying',
    nullable: false,
  })
  seat: string;
}
