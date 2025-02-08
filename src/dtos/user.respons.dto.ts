import { User } from "../database/entities/user.entity";

export class UserResDto {
  id: string;
  name: string;
  email: string;
  username: string;
  downlineUsers: User[];

  constructor(data: User, referr: User[]) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.username = data.username;
    this.downlineUsers = referr;
  }
}
