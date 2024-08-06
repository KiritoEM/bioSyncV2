import { Document, Schema } from "mongoose";

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
  title: string;
  description: string;
  price: string;
  likes: number;
  location: [number, number];
}

export type { Iuser, Ipost };
