import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../features/posts/postsSlice";
import { useGetPostsQuery } from "../../service/postService";
import Post from "../Post";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { data, refetch } = useGetPostsQuery();

  useEffect(() => {
    refetch();
    if (data) {
      dispatch(setPosts(data.data));
    }
  }, [data, posts, refetch, dispatch]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
