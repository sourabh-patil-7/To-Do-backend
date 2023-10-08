//establish the connection between mongoose and express

const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
  mongoose
    .connect(process.env.database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db connection is successfull");
    })
    .catch((error) => {
      console.log("connection not successfull");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbconnect;
