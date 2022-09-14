import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
	@PrimaryGeneratedColumn()
	uid: number;

	@Column()
	title: string;
}
