import Posts from "../Posts";
import Topic from "../Topic";
import "./content.css";
import { Routes, Route, useParams } from "react-router-dom";
import Avatar from "boring-avatars";
import { AiFillPicture, AiFillEnvironment, AiFillSmile } from "react-icons/ai";
import { FaChartBar, FaShareAlt } from "react-icons/fa";
import { getUser } from "../../service/userService";
import { useEffect, useState } from "react";
import { getPostByUserId } from "../../service/postService";
import Post from "../Post";
import { useSelector } from "react-redux";

const User = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getBlogs = async (id) => {
      const { data: userData } = await getUser(id);
      console.log(userData);

      const postsData = await getPostByUserId(userData.id);
      setPosts(postsData);
    };
    getBlogs(id);
  }, [id]);

  return (
    <div className="userInfo">
      <div className="userInfoShare">
        <div className="userInfoShareUpper">
          <span>Home</span>
          <div className="userInfoShareUpperRight">
            <FaShareAlt />
            <span>Rules</span>
          </div>
        </div>
        <div className="userInfoShareBottom">
          <div className="userInfoShareBL">
            <div className="userAvatar">
              <Avatar name={user.accountId} variant="beam" size={50} />
            </div>
          </div>
          <div className="userInfoShareBR">
            <textarea
              type="text"
              className="userInfoInput"
              placeholder="Write code to earn..."
            />
            <div className="userInfoSBRB">
              <ul className="userInfoActions">
                <li>
                  <AiFillPicture />
                </li>
                <li>
                  <FaChartBar />
                </li>
                <li>
                  <AiFillSmile />
                </li>
                <li>
                  <AiFillEnvironment />
                </li>
              </ul>
              <button className="userInfoShareButton">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="userInfoPosts">
        {posts && posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topic />
              <Posts />
            </>
          }
        />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default Content;
