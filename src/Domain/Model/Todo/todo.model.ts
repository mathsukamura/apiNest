import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class todo{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    completed: boolean;
    @Column()
    Date: Date;
}