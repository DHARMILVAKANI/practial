import { Repository } from "typeorm";
import { myDataSource } from "../database/db";
import { User } from "../database/entities/user.entity";
import { CreateUserDto } from "../dtos/createUser.request.dto";
import { Response } from "express";
import { createUserMapper } from "../mapper/user.mapper";
import { UserResDto } from '../dtos/user.respons.dto';

class UserService {
  userRepo: Repository<User>;

  constructor() {
    this.userRepo = myDataSource.getRepository(User);
  }

  public createUserService = async (data: CreateUserDto, res: Response) => {
    try {
      let referrer = null;
      if (data.sponsorId) {
        referrer = await this.userRepo.findOne({
          where: { username: data.sponsorId },
        });
      }

      const createUserData = createUserMapper(data, referrer);

      const newuser = await this.userRepo.save(createUserData);
      return newuser;
    } catch (error) {
      throw new Error(error);
    }
  };
  public getUsersReferrals = async (query: any, res: Response) => {
    const { username } = query;
    const user = await this.userRepo.findOne({
      where: { username },
      relations: ["referrals", "referrals.referrals"],
    });
    if (!user) {
      res.status(404).json("User not found");
    }
    try {
      return new UserResDto(user, user.referrals);
    } catch (error) {
      res.status(500).json("Something went wrong");
    }
  };
}

export default new UserService();
