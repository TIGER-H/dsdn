import Avatar from "boring-avatars";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar size={56} variant="beam" />
      </div>
      <div className="postMain">
        <div className="postUsername">Username</div>
        <div className="postContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          blanditiis, magnam aperiam, similique deleniti nemo, fugiat at culpa
          corrupti inventore officia numquam soluta. Molestiae perspiciatis eum,
          assumenda numquam saepe impedit!
        </div>
        <div className="postTime">just now</div>
        <div className="postActions">
          <div className="postAction"></div>
          <div className="postAction"></div>
          <div className="postAction"></div>
          <div className="postAction"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
