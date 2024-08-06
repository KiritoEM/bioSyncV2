import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      return postController.addPost(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
  }
};
export default handler;
