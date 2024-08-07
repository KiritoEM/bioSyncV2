import postModel from "../models/postModel";
import { Ipost } from "../utils/schemaTypes";

class postServices {
  async addPostService(postData: Ipost): Promise<Ipost> {
    try {
      const newPost = new postModel({ ...postData });
      return await newPost.save();
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async getAllpostService(): Promise<Ipost[]> {
    try {
      const allPost = postModel.find();
      return allPost;
    } catch (err) {
      throw new Error(err as string);
    }
  }
}

export default new postServices();
