import { Schema, model } from "mongoose";

// Create Schema
const UserSchema = new Schema({
  // schema
});

const User = model("user", UserSchema);

export default User;
