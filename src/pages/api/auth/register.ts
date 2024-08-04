import { NextApiRequest, NextApiResponse } from "next";
import authController from "@/lib/controllers/authController";
import { connectDB } from "@/lib/configs/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      return authController.createUser(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error", err });
  }
};

export default handler;
