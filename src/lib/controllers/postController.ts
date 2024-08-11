import { NextApiRequest, NextApiResponse } from "next";
import postServices from "../services/postServices";
import { MulterReq } from "../utils/schemaTypes";

class authController {
  async addPost(req: MulterReq, res: NextApiResponse) {
    try {
      if (!req.file) {
        res.status(400).json("Aucun image téléchargé");
      }

      console.log(req.body);
      const picture = {
        file_name: req.file.originalname,
        file_size: req.file.size,
        file_path: req.file.path,
      };

      const newPost = await postServices.addPostService({
        ...req.body,
        picture,
      });

      if (!newPost) {
        return res.status(400).json("Error when creating post");
      }

      return res
        .status(200)
        .json({ message: "post created successfully ✅", newPost });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: err });
    }
  }

  async addLocation(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query;
      const post = await postServices.addLocationService(
        req.body.location,
        id as string
      );

      if (!post) {
        return res.status(400).json({ message: "Error when adding Location" });
      }

      return res
        .status(200)
        .json({ message: "Location added successfuly", post });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });
    }
  }

  async getAllPost(req: NextApiRequest, res: NextApiResponse) {
    try {
      const allPost = await postServices.getAllpostService();

      if (!allPost) {
        return res.status(400).json("Error when getting app posts");
      }

      return res
        .status(200)
        .json({ message: "All post fetched successfully", allPost });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: err });
    }
  }
}

export default new authController();
