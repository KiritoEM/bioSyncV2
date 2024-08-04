import { Document, Schema } from "mongoose";

interface Iuser extends Document {
  pseudo: string;
  name: string;
  email: string;
  posts?: Schema.Types.ObjectId[];
  password: string;
  localisation?: string;
}

export type { Iuser };
