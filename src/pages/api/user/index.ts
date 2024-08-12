import userController from "@/lib/controllers/userController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiResponse } from "next";

const handler = (req: Req, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      return bearer(userController.getUser)(req, res);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
};

export default handler;
