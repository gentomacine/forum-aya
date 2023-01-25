import User from "../model/Users/UserModel.js";


export const userRegisterController = async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    try {
        //check if user already registered
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.json({ message: "user already exist" })
        }
        // creates user if not registered

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