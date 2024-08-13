import { connectDB } from "@/lib/configs/mongodb";
import postController from "@/lib/controllers/postController";
import { NextApiRequest, NextApiResponse } from "next";
import upload from "@/lib/middlewares/upload";
import { Req } from "@/lib/utils/schemaTypes";
import bearer from "@/lib/middlewares/bearer";

const handler = async (req: Req, res: NextApiResponse) => {
  await connectDB();
  try {
    if (req.method === "POST") {
      await new Promise<void>((resolve, reject) => {
        upload.single("image")(req as any, res as any, (err) => {
          if (err) {
            reject();
          }

          resolve();
        });
      });

      await bearer(postController.addPost)(req, res);
    } else if (req.method === "GET") {
      return bearer(postController.getAllPost)(req, res);
    } else if (req.method === "DELETE") {
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
