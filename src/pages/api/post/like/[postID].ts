import postController from "@/lib/controllers/postController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiResponse } from "next";

const handler = (req: Req, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      return bearer(postController.likePost)(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

export default handler;
