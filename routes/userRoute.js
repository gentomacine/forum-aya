import express from "express";
import {
    userDeleteController,
    userIdController,
    userLoginController,
    userRegisterController,
    userUpdateController
} from "../controller/userController.js";
const userRoute = express.Router();

//register user
userRoute.post("/register", userRegisterController)

//login user
userRoute.post("/login", userLoginController)

//get user by id

userRoute.get("/:id", userIdController)

//delete user 
userRoute.delete("/delete", userDeleteController)

// update user
userRoute.put("/update", userUpdateController)

export default userRoute;