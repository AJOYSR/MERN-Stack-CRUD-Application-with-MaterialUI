import express from "express";
import mongoose from "mongoose";
import connection from "./database/db.js";
import Routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded(true));

app.use(cors());
app.use('/',Routes);


connection();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
