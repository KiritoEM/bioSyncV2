import { NextApiRequest, NextApiResponse } from "next";
import postServices from "../services/postServices";

class authController {
  async addPost(req: NextApiRequest, res: NextApiResponse) {
    try {
      const newPost = await postServices.addPostService(req.body);

      if (!newPost) {
        return res.status(400).json("Error when creating post");
      }

      return res
        .status(200)
        .json({ message: "post created successfully ✅", newPost });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new authController();
