
const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cors = require("cors"); // Import cors middleware



// dotenv.config(); 
app.use(express.json());

app.use(cors());



mongoose
  .connect("mongodb+srv://sumitbasak170:6NWW4cPgysSHYYXE@cluster0.aklzfcx.mongodb.net/linkedin-connection?retryWrites=true&w=majority&appName=Cluster0", {

  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);


app.listen("5000", () => {
    console.log("Backend is running.");
  });