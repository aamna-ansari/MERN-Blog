// Step! Schema From Mongose
const mongoose = require("mongoose");
const { Schema,model } = mongoose;

// Create Schema
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    //salt create for hashing Password
    salt: {
      type: String,
      
    },
    profileImage: {
      type: String,
      default: "/images/user.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

// Model
const User = model("user", userSchema);

module.exports = User;
