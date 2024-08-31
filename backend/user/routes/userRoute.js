import express from 'express';
import { loginUser,registerUser,getUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/:id",authMiddleware,getUser);

export default userRouter;