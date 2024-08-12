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
  location: [number, number];
  productType: string;
  quantityType: string;
  quantity: number;
  likers: Schema.Types.ObjectId[];
  poster: Schema.Types.ObjectId;
}

interface Req extends NextApiRequest {
  file: any;
  user: {
    userId: string;
  };
}

export type { Iuser, Ipost, Req };
