import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db";

dotenv.config();
db.connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
