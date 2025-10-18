import path from "path";
import { IpostCard } from "./types";
import { getFileName } from "./regex";

const calculateLikes = (posts: IpostCard[]): number => {
  return posts.reduce((acc, post) => acc + post.likers.length, 0) as number;
};

const totalPicture = (posts: IpostCard[]): number => {
  return posts.length;
};

const getAllImages = (posts: IpostCard[]): string[] => {
  const allPostsImages = posts?.map(
    (post) => `/uploads/${getFileName(post.picture.file_path)}`
  );

  return allPostsImages;
};

export { calculateLikes, totalPicture, getAllImages };
