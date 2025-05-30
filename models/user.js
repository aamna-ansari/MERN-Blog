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
    //salt create for hashing Password | Secret key
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
  if (!user.isModified("password")) return;

  // Crypt the User password
  // Generate a Salt
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
  next();
});
// How It Works:
// Salt: A unique random value is generated to make each hash unique.
// HMAC Hashing: The password is hashed using SHA-256 along with the salt.
// Security Purpose: Using a salt ensures that even if two users have the same password, their hashed passwords will be different.

// hashed match to sign in
userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) return false;

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProviderHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (hashedPassword !== userProviderHash)
    throw new Error("Incorrect Password");

  return { ...user, password: undefined, salt: undefined };
});

// Model
const User = model("user", userSchema);

module.exports = User;
