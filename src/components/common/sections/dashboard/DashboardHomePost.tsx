import { FC, useEffect } from "react";
import HomeBanner from "./HomeBanner";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import postActions from "@/actions/postActions";

const DashboardHomePost: FC = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const { getAllPosts } = postActions();

  if (posts) {
    console.log(posts);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="dashboard-home__post w-[calc(100%-600px)]">
      <HomeBanner />
    </div>
  );
};

export default DashboardHomePost;
