import authController from "@/lib/controllers/authController";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      return  authController.login(req, res);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error", err });
  }
};

export default handler;
