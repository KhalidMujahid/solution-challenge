const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const app = express();
const bodyParser = require("body-parser");



require("dotenv/config");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/",router);
app.use("/feeds", router);

app.listen(PORT, (err) => {
  if(err){
    console.log("Error occure " + err);
  } else {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }   ,(err) => {
      if(err){
        return err;
      } else {
        console.log("Server and Database connected at port " + PORT);
      }
    })

  }
})
