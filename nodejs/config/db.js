const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.ruehske.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const DB_Connection = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log("Connected to Database!", conn.connection.host);
  } catch (error) {
    console.log("Failed to connect with MongoDB: ", error);
  }
};

module.exports = DB_Connection;
