import { model, models, Schema } from "mongoose";
import { Ipost } from "../utils/schemaTypes";

const postSchema = new Schema<Ipost>({
  picture: {
    file_path: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
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
  likes: {
    type: Number,
    default: 0,
  },
  location: {
    type: [Number],
    default: [0, 0],
  },
});

const postModel = models.Post || model<Ipost>("Post", postSchema);

export default postModel;
