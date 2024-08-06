import postModel from "../models/postModel";
import { Ipost } from "../utils/schemaTypes";

class postServices {
  async addPost(postData: Ipost) {
    try {
      const newPost = new postModel();
      return newPost.save();
    } catch (err) {
      throw new Error(err as string);
    }
  }
}

export default new postServices();
