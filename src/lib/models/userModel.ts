import { model, Schema } from "mongoose";
import { Iuser } from "../utils/schemaTypes";

const userSchema = new Schema<Iuser>(
  {
    pseudo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = model<Iuser>("User", userSchema);
export default userModel;
