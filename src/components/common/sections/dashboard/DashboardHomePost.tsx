import { FC, useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import postActions from "@/actions/postActions";
import { IpostCard } from "@/helpers/types";
import { useAuth } from "@/core/contexts/useAuth";
import { PostSkeleton } from "@/components/UI/skeleteon";
import PostCard from "../../cards/PostCard";

const DashboardHomePost: FC = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const loading = useSelector((state: RootState) => state.loading.loadingState);
  const { currentUserId } = useAuth();
  const { getAllPosts } = postActions();

  const [showNoPostsMessage, setShowNoPostsMessage] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    if (!loading && posts.length === 0) {
      const timer = setTimeout(() => {
        setShowNoPostsMessage(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowNoPostsMessage(false);
    }
  }, [loading, posts.length]);

  return (
    <div className="dashboard-home__post w-full lg:w-[calc(100%-600px)] flex flex-col gap-10 mb-10">
      <HomeBanner />
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <PostSkeleton key={index} />
        ))
      ) : posts.length > 0 ? (
        posts.map((post: IpostCard, index) => (
          <PostCard key={index} {...post} id={currentUserId as string} />
        ))
      ) : showNoPostsMessage ? (
        <h5 className="text-secondary01">Aucune publication</h5>
      ) : (
        Array.from({ length: 4 }).map((_, index) => (
          <PostSkeleton key={index} />
        ))
      )}
    </div>
  );
};

export default DashboardHomePost;
