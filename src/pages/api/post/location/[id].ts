import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      return postController.addLocation(req, res);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
