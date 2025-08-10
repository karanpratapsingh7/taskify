const mongoose = require("mongoose");
const conn = async () => {
  try {
    await mongoose.connect("mongodb+srv://karanrasmai3264:Karan2026@cluster0.lgdb6ok.mongodb.net/Taskify");
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

conn();
