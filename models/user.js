// Step! Schema From Mongose
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// FRom Node
const { createHmac, randomBytes, Hash } = require("crypto");

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

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("Password")) return;

  // Crypt the User password

  // make a salt
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
});

// Model
const User = model("user", userSchema);

module.exports = User;
