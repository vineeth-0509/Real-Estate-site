import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

/*

const age = 1000*60*60*24*7;

const token = jwt.sign({
id: user.id
},process.env.JWT_SECRET_KEY,
{expiresIn: age});

res.cookie("token",token,{
httpOnly: true,
secret: true,
maxAge: age}).
status(200).res.json({message:"Login Successfull"})


*/