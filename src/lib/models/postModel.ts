import { model, models, Schema } from "mongoose";
import { Ipost } from "../utils/schemaTypes";

const postSchema = new Schema<Ipost>(
  {
    picture: {
      file_path: {
        type: String,
      },
      file_name: {
        type: String,
      },
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    quantityType: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    likers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    location: {
      type: [Number],
      default: [0, 0],
    },
    poster: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = models.Post || model<Ipost>("Post", postSchema);

export default postModel;
