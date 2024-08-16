const mongoose = require("mongoose");
require("dotenv").config();

const conn = async (req, res) => {
  try {
    await mongoose.connect(process.env.URL).then(() => {
      console.log("Database Connected Succesful");
    });
  } catch (error) {
    res.status(400).json({
      message: "Not Connected",
      success: false,
    });
  }
};
conn();
