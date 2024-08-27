import express from "express";
import router from "./routes/routes.js";
import { connectToMongoDB } from "./connections/mongoConnection.js";
const app = express();
const PORT = 8001;
app.use(express.json());

app.use("/url", router);
connectToMongoDB("mongodb://127.0.0.1:27017/short -url").then(() =>
  console.log("MongoDB Connected :)")
);
app.post("/test", (req, res) => {
  console.log("Test Body:", req.body.headers);
  res.json({ received: req.body });
});

app.listen(PORT, () => console.log(`Server Started At Port ${8001}`));
