import { connectDB } from "@/lib/configs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    if (req.method === "GET") {
      res.status(200).json("SERVER RUNNING ✅");
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
  }
};

export default handler;
