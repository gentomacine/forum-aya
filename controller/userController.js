import User from "../model/Users/UserModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../util/generatetoken.js";
import { obtainTokenFromHeader } from "../util/obtaintokenfromheader.js";


export const userRegisterController = async (req, res) => {
    const { firstname, lastname, email, password } = req.body
    const foundUser = await User.findOne({ email });
    try {
        //check if user already registered

        if (foundUser) {
            return res.json({ message: "user already exist" })
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const passwordhash = await bcrypt.hash(password, salt)
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: passwordhash,

        })
        res.json({
            status: "success",
            data: user
        });
    } catch (error) {
        res.json(error.message)
    }

}
//login user

export const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    //console.log(req.headers);
    try {
        const foundUser = await User.findOne({ email });


        if (!foundUser) {
            return res.json({
                status: "error",
                message: "invalid email login details"
            })
        }
        const foundPassword = await bcrypt.compare(password, foundUser.password);

        if (!foundPassword) {
            return res.json({ status: "error", message: "invalid login details" })
        } else {


            res.json({
                status: "success",
                data: {
                    firstname: foundUser.firstname,
                    lastname: foundUser.lastname,
                    email: foundUser.email,
                    token: generateToken(foundUser._id)
                },
            })
        }
    } catch (error) {
        res.json(error.message)
    }

}

export const DisplayAllUser = async (req, res) => {
    try {
        res.json({
            status: "Success",
            data: "Display All Users"
        })

    } catch (error) {
        res.json(error.message)
    }
}

//user profile
export const userIdController = async (req, res) => {
    const { id } = req.params;
    try {
        //const token = obtainTokenFromHeader(req)
        // console.log(token);
        //console.log(req, userAuth);
        const foundUser = await User.findById(id);
        if (foundUser) {
            res.json({
                status: "success",
                data: { foundUser }
            });
        } else {
            res.json({
                status: "success",
                data: " user with such id doesnt exist"
            });
        }

    } catch (error) {
        res.json(error.message)
    }

}

export const userDeleteController = async (req, res) => {
    try {
        res.json({
            status: "user deleted",
            //data: "user deleted successfully"
        })
    } catch (error) {
        res.json(error.message)
    }

}
export const userUpdateController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "user updated successfully"
        })
    } catch (error) {
        res.json(error.message)
    }

}