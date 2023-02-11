import express from "express";
import multer from "multer";
import storage from "../config/cloudinary.js";
import {
    DisplayAllUser,
    profilePhotoUploadController,
    userDeleteController,
    userIdController,
    userLoginController,
    userRegisterController,
    userUpdateController
} from "../controller/userController.js";
import { isLogin } from "../middleware/isLogin.js";



const userRoute = express.Router();
const upload = multer({ storage })



//register user
userRoute.post("/register", userRegisterController);

//login user
userRoute.post("/login", userLoginController);

// get all the user
userRoute.get("", DisplayAllUser);

//get user profile
userRoute.get("/profile/", isLogin, userIdController);

//delete user 
userRoute.delete("/:id", userDeleteController);

// update user
userRoute.put("/:id", userUpdateController)

// profile image
userRoute.post("/profile-image", isLogin, upload.single("profile"), profilePhotoUploadController)

export default userRoute;