import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiResponse } from "next";

const handler = async (req: Req, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "DELETE") {
      return bearer(postController.deletePost)(req, res);
    } else {
      res.status(405).end(`Method ${req.method} not allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
};

export default handler;
