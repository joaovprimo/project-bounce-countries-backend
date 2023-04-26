import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/index.js";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use(Routes);

app.listen(PORT,()=>{
    console.log(`listening on Port ${PORT}`);
})