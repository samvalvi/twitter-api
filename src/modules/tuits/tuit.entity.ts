import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({name: "tuits"})
export class Tuit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: "text"})
  message: string;
}