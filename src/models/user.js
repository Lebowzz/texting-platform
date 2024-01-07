import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    password: String,
    profile_picture: Buffer,
    profile_picture_type: String, // .jpg, .png ...
    isLoggedIn: Boolean,
    isInDarkMode: Boolean,
    isTyping: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema); // or mongoose.model.User

export default User;
