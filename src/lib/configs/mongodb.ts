import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.NEXT_PUBLIC_MONGODB_URI;
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(mongoURI as string)
      .then(() => console.log(`mongoDB connected in Next JS :`))
      .catch((err) =>
        console.error(`error when connecting to database: ${err}`)
      );
  } catch (err) {
    console.error(err);
  }
};
