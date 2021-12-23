import { useState } from "react";
import Post from "../Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
