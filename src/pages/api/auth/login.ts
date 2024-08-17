import { connectDB } from "@/lib/configs/mongodb";
import authController from "@/lib/controllers/authController";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      return authController.login(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export default handler;
