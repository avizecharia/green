const exp = require("express");
const dotenv = require("dotenv");
const {connectToMongo} = require("./green-eye/config/dbConfig")

const app = exp();
//?
dotenv.config();
connectToMongo()


const port = process.env.PORT || 1415;

app.use(exp.json());

app.use("/auth", require("./green-eye/routers/authRouter"));
app.use("/user", require("./green-eye/routers/userRouter"));
app.use("/greenEye", require("./green-eye/routers/greenEyeRouter"));

app.listen(port, () => console.log(`server running on port ${port}`));
