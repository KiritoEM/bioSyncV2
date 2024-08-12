import postController from "@/lib/controllers/postController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: Req, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      return bearer(postController.dislikePost)(req, res);
    }
  } catch (err) {
    console.error(err);
  }
};

export default handler;
