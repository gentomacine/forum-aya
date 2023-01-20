import User from "../model/Users/UserModel.js";


export const userRegisterController = async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    try {
        const userFound = await User.findOne({ email });
        if (userFound) {
            return res.join({ message: "user already exist" })
        }
        const user = await User.create({
            firstname, lastname, email, password

        })
        res.json({
            status: "success",
            data: user
        });
    } catch (error) {
        res.json(error.message)
    }

}

export const userLoginController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "you have been successfully login"
        })
    } catch (error) {
        res.json(error.message)
    }

}
export const userIdController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "get user by id"
        })
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