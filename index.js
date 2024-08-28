import express from "express";
import router from "./routes/routes.js";
import { connectToMongoDB } from "./connections/mongoConnection.js";
const app = express();
const PORT = 8001;
app.use(express.json());

app.use("/", router);
connectToMongoDB("mongodb://127.0.0.1:27017/shorturl").then(() =>
  console.log("MongoDB Connected :)")
);

app.listen(PORT, () => console.log(`Server Started At Port ${8001}`));


//C:\Program Files\MongoDB\Server\7.0\bin\mongosh\bin