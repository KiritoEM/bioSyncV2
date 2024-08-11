import { FC, useEffect } from "react";
import HomeBanner from "./HomeBanner";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import postActions from "@/actions/postActions";
import PostCard from "../../cards/PostCard";
import { IpostCard } from "@/helpers/types";

const DashboardHomePost: FC = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const { getAllPosts } = postActions();

  if (posts) {
    console.log(posts[0]);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="dashboard-home__post w-[calc(100%-600px)] flex flex-col gap-10 mb-10">
      <HomeBanner />
      {posts.map((post: IpostCard, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default DashboardHomePost;
