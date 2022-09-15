import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
	@PrimaryGeneratedColumn()
	uid: number;

	@Column()
	title: string;

	@Column()
	parent_uid: string;

	@Column()
	status: string;

	@Column()
	status_idx: number;
}
