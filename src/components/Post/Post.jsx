import Avatar from "boring-avatars";
import { useState } from "react";
import * as timeago from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../features/posts/postsSlice";
import "./post.css";
import { likePostAction } from "../../service/actionService";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdChatBubbleOutline,
  MdShare,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { creator, blogText, createTime, likeNum, comment, imageUrl } = post;

  const { uId } = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const handleLikeAction = async () => {
    // check if isliked?

    if (isLiked) {
      const response = await likePostAction(post.id, uId, 0);
      console.log(response);
      dispatch(unlikePost(post.id));
      setIsLiked(false);
    } else {
      const response = await likePostAction(post.id, uId, 1);
      console.log(response);
      dispatch(likePost(post.id));
      setIsLiked(true);
    }
  };

  return (
    <div className="post">
      <Link className="postAvatar" to={`/user/${creator}`}>
        <Avatar size={56} variant="beam" name={creator} />
      </Link>
      <div className="postMain">
        <div className="postUsername">{creator}</div>
        <div className="postContent">
          {blogText}
          {imageUrl && (
            <img src={imageUrl} alt="image not found" className="postImage" />
          )}
        </div>
        <div className="postTime">{timeago.format(createTime)}</div>
        <div className="postActions">
          <div
            className={`postAction ${isLiked ? "postAction--active" : ""}`}
            onClick={handleLikeAction}
            style={{
              color: isLiked ? "#52C3E6" : "white",
            }}
          >
            {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
            <span>{likeNum}</span>
          </div>
          <div className="postAction">
            <MdChatBubbleOutline />
            <span>{comment?.length || 0}</span>
          </div>
          <div className="postAction">
            <MdShare />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
