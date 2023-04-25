import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/index.js";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(Routes);

app.listen(process.env.PORT,()=>{
    console.log(`listening on Port ${process.env.PORT}`);
})