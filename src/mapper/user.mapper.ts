import { User } from "../database/entities/user.entity";

export const createUserMapper = (data: Partial<User>, referrer: User) => {
  return {
    name: data.name,
    email: data.email,
    username: data.username,
    referrer: data?.referrer ?? null,
  };
};
