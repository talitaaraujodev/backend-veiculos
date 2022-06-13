import app from "./app";
import dotenv from "dotenv";
dotenv.config();
app.listen(9000 || process.env.PORT);
