import postModel from "../models/postModel";
import { Ipost } from "../utils/schemaTypes";
import userModel from "../models/userModel";

class postServices {
  async addPostService(postData: Ipost, userID: string): Promise<Ipost> {
    try {
      const user = await userModel.findById(userID);
      const newPost = new postModel({ ...postData });
      user.posts.push(newPost._id);

      await user.save();
      return await newPost.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async addLocationService(
    location: [number, number],
    id: string
  ): Promise<Ipost> {
    try {
      const newPost = await postModel.findById(id);
      console.log(newPost);
      newPost.location = location;
      return await newPost.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllpostService(): Promise<Ipost[]> {
    try {
      const allPost = postModel.find().populate("poster").exec();
      return allPost;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new postServices();
