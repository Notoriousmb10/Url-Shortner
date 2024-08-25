const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const connectToMongoDB = require('./connect')

const app = express();
const PORT = 8001;


app.use("/url", urlRoute);

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB connected :)'))

app.listen(PORT, () => console.log(`The server started at port ${PORT}`));
