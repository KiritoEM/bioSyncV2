import { Document, Schema } from "mongoose";
import { NextApiRequest } from "next";

interface Iuser extends Document {
  pseudo: string;
  name: string;
  email: string;
  posts?: Schema.Types.ObjectId[];
  password: string;
  localisation?: string;
}

interface Ipost extends Document {
  picture?: any;
  name: string;
  description: string;
  price: string;
  likes: number;
  location: [number, number];
  productType: string;
  quantityType: string;
  quantity: number;
}

interface MulterReq extends NextApiRequest {
  file: any;
}

export type { Iuser, Ipost, MulterReq };
