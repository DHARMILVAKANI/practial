import { Router } from "express";
import  UserController  from '../controllers/user.controller';
export const router = Router();

router.post('/user',UserController.createUser)
        .get('/user/',UserController.getUsersReferrals)