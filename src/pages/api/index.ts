import { connectDB } from "@/lib/configs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  connectDB();
  try {
    if (req.method === "GET") {
      res.status(200).json("SERVER RUNNING ✅");
    }
  } catch (err) {
    console.error(err);
  }
};

export default handler;
