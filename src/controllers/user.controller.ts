import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/createUser.request.dto";
import UserService from "../services/user.service";

class UserController {
  constructor() {}
  createUser = async (req: Request, res: Response) => {
    const data: CreateUserDto = req.body;
    if (!req.body) {
      res.status(400).json("Please enter values");
    }
    const result = await UserService.createUserService(data, res);
    res.send(result);
  };

  getUsersReferrals = async (req: Request, res: Response) => {
    const query = req.query;
    const result = await UserService.getUsersReferrals(query, res);
    res.send(result);
  };
}

export default new UserController();
