
import { obtainTokenFromHeader } from "../util/obtaintokenfromheader.js";
import { verifytoken } from "../util/verifytoken.js";

export const isLogin = (req, res, next) => {
    //get token fron header

    const token = obtainTokenFromHeader(req);
    const userDecoded = verifytoken(token);

    req.userAuth = userDecoded.id;

    if (!userDecoded) {
        return res.json({
            status: "error",
            message: "kindly,login because it seems the token is expired or invalid"
        })

    } else {
        next();
    }
}

