import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import { NextApiRequest, NextApiResponse } from "next";
import upload from "@/lib/middlewares/upload";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    if (req.method === "POST") {
      upload.single("image");
      await postController.addPost(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
