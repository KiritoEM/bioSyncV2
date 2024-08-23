import path from "path";
import { IpostCard } from "./types";

const calculateLikes = (posts: IpostCard[]): number => {
  return posts.reduce((acc, post) => acc + post.likers.length, 0) as number;
};

const totalPicture = (posts: IpostCard[]): number => {
  return posts.length;
};

const getAllImages = (posts: IpostCard[]): string[] => {
  return posts?.map(
    (post) => `/uploads/${path.basename(post.picture.file_path)}`
  );
};

export { calculateLikes, totalPicture, getAllImages };
