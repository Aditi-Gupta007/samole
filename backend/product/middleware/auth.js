import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if (!token) {
        return res.json({success:false,message:'Not Authorized Login Again'});
    }
    try {
        const token_decode =  jwt.verify(token, process.env.JWT_SECRET);
        console.log(token_decode)
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        return res.json({success:false,message:error.message});
    }
}

export const jwtCheck=expressjwt({
    secret: "random#secret", //Public Key 
    userProperty: "auth", //Property Of Decrypted JWT Token
    algorithms: ['HS256'] //Algorithm For JWT Token ( RS256 Currently )
});