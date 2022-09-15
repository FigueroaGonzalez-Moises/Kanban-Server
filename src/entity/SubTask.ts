import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubTask extends BaseEntity {
	@PrimaryGeneratedColumn()
	uid: number;

	@Column()
	title: string;

	@Column()
	parent_uid: string;
}
