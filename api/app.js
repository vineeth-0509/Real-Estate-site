import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import cors from "cors";
const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post",postRoute);
app.use("/api/auth", authRoute); 
app.use("/api/test", testRoute); 



app.listen(3000,()=>{
    console.log("server is running")
});