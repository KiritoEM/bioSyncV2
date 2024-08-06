import { model, models, Schema } from "mongoose";
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
      trim: true,
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

const userModel = models.User || model<Iuser>("User", userSchema);
export default userModel;
