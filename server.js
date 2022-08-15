const express = require("express");
const mongoose = require("mongoose");
const loginDataRouter = require("./Routes/loginData");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/v1/loginData", loginDataRouter);

const dbUri =
  "mongodb+srv://mongo:mongo123@cluster0.gsq4gdj.mongodb.net/user?retryWrites=true&w=majority";

function connectToServer() {
  //app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
  mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      (result) => console.log("Connected to db..."),
      app.listen(PORT, () =>
        console.log(`The server is running on port ${PORT}`)
      )
    )
    .catch((err) => console.log(err));
}

module.exports = connectToServer;