import express from "express";
import path from 'path'
import router from "./routes/routes.js";
import bodyParser from 'body-parser';
import { connectToMongoDB } from "./connections/mongoConnection.js";
const app = express();
const PORT = 8001;
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", router);
connectToMongoDB("mongodb://127.0.0.1:27017/url-store").then(() =>
  console.log("MongoDB Connected :)")
);
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.listen(PORT, () => console.log(`Server Started At Port ${8001}`));


//C:\Program Files\MongoDB\Server\7.0\bin\mongosh\bin