import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {config} from "dotenv";
import {register} from "./controllers/index.js";

config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/register", register);

mongoose
  .connect('mongodb+srv://manishDhameja:Manish%40123@yoga-class-registration.yypf7cq.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend running on 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
