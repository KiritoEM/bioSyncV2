import postActions from "@/actions/postActions";
import { InewPostCard } from "@/components/common/cards/PostCard";
import { useEffect, useState } from "react";

interface LikeParams {
  _id?: string;
  likers: string[];
  id?: string;
}

const useLike = (posts: LikeParams) => {
  const [currentLikes, setCurrentLikes] = useState(posts.likers.length);
  const [liked, setIsLiked] = useState<boolean>(false);
  const { likePost, dislikePost } = postActions();

  useEffect(() => {
    setIsLiked(posts.likers.includes(posts.id as string));
  }, [posts.likers, posts.id]);

  const handleLike = async () => {
    if (!liked) {
      setCurrentLikes((prevLike) => prevLike + 1);
      setIsLiked(true);
      await likePost(posts._id as string);
    } else {
      setCurrentLikes((prevLike) => prevLike - 1);
      setIsLiked(false);
      await dislikePost(posts._id as string);
    }
  };

  return { handleLike, currentLikes, liked };
};

export default useLike;
