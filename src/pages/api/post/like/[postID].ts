import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiResponse } from "next";

const handler = async (req: Req, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      return bearer(postController.likePost)(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
  }
};

export default handler;
