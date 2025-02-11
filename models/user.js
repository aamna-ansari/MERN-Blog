// Step! Schema From Mongose

const Schema = require("mongose");

// Create Schema
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    //   salt create for hashing Password
    salt: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);
