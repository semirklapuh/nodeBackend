const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginDataSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    iv: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const LoginData = mongoose.model("LoginData", LoginDataSchema);

module.exports = LoginData;
