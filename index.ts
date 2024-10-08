import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app: Express = express();

mongoose.connect("mongodb+srv://erkiallekors:q3I9BotUjQ2frtVX@mongodb.i7t64.mongodb.net/");
const database = mongoose.connection;


database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
app.use(cors({
    origin: ['http://localhost:3006']
  }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

import stringsController from "./controllers/string";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";

app.use('/', authorController);
app.use('/', stringsController);
app.use('/', articleController);
app.use('/', commentController);

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});