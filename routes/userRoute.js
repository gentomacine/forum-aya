import express from "express";
import {
    DisplayAllUser,
    userDeleteController,
    userIdController,
    userLoginController,
    userRegisterController,
    userUpdateController
} from "../controller/userController.js";
const userRoute = express.Router();

//register user
userRoute.post("/register", userRegisterController);

//login user
userRoute.post("/login", userLoginController);

// get all the user
userRoute.get("", DisplayAllUser);

//get user by id
userRoute.get("/:id", userIdController);

//delete user 
userRoute.delete("/:id", userDeleteController);

// update user
userRoute.put("/:id", userUpdateController)

export default userRoute;