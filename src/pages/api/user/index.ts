import { connectDB } from "@/lib/configs/mongodb";
import userController from "@/lib/controllers/userController";
import bearer from "@/lib/middlewares/bearer";
import { Req } from "@/lib/utils/schemaTypes";
import { NextApiResponse } from "next";

const handler = async (req: Req, res: NextApiResponse) => {
  try {
    await connectDB();
    if (req.method === "GET") {
      return bearer(userController.getUser)(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
};

export default handler;
