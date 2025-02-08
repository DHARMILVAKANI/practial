import { BaseEntity } from "./base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("User")
export class User extends BaseEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar" })
  username: string;

  @ManyToOne(() => User, (user) => user.referrals, { nullable: true })
  referrer: User;

  @OneToMany(() => User, (user) => user.referrer, { nullable: true })
  referrals: User[];
}
