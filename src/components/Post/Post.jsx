import Avatar from "boring-avatars";
import { useState } from "react";
import "./post.css";

const icons = {
  heart: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C9.35502 18.428 8.62602 17.833 7.85502 17.2H7.84502C5.13002 14.98 2.05302 12.468 0.694023 9.458C0.24754 8.49973 0.0109268 7.45713 1.1406e-05 6.4C-0.00297039 4.94949 0.578794 3.55899 1.61383 2.54277C2.64887 1.52655 4.04981 0.970397 5.50002 1C6.68065 1.00187 7.83586 1.34308 8.82802 1.983C9.26399 2.26597 9.65844 2.60826 10 3C10.3435 2.6098 10.7381 2.26771 11.173 1.983C12.1648 1.34296 13.3197 1.00172 14.5 1C15.9502 0.970397 17.3512 1.52655 18.3862 2.54277C19.4213 3.55899 20.003 4.94949 20 6.4C19.9898 7.45882 19.7532 8.5032 19.306 9.463C17.947 12.473 14.871 14.984 12.156 17.2L12.146 17.208C11.374 17.837 10.646 18.432 10.001 19.008L10 19ZM5.50002 3C4.56853 2.98835 3.6701 3.34485 3.00002 3.992C2.35441 4.62617 1.99358 5.49505 1.99994 6.4C2.01135 7.1705 2.18585 7.92986 2.51202 8.628C3.15353 9.92671 4.01913 11.1021 5.06902 12.1C6.06002 13.1 7.20002 14.068 8.18602 14.882C8.45902 15.107 8.73702 15.334 9.01502 15.561L9.19002 15.704C9.45702 15.922 9.73302 16.148 10 16.37L10.013 16.358L10.019 16.353H10.025L10.034 16.346H10.039H10.044L10.062 16.331L10.103 16.298L10.11 16.292L10.121 16.284H10.127L10.136 16.276L10.8 15.731L10.974 15.588C11.255 15.359 11.533 15.132 11.806 14.907C12.792 14.093 13.933 13.126 14.924 12.121C15.9741 11.1236 16.8397 9.94852 17.481 8.65C17.8131 7.9458 17.9901 7.17851 18.0001 6.4C18.0042 5.49784 17.6435 4.6323 17 4C16.3312 3.34992 15.4326 2.99049 14.5 3C13.3619 2.99033 12.274 3.46737 11.51 4.311L10 6.051L8.49002 4.311C7.72609 3.46737 6.6381 2.99033 5.50002 3Z"
        fill="#fff"
        fill-opacity="0.7"
      />
    </svg>
  ),
  comment: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6H4V8H6V6Z" fill="#fff" fill-opacity="0.7" />
      <path d="M8 6H10V8H8V6Z" fill="#fff" fill-opacity="0.7" />
      <path d="M14 6H12V8H14V6Z" fill="#fff" fill-opacity="0.7" />
      <path
        d="M0 2V18L4.8 14.4C5.14582 14.1396 5.56713 13.9992 6 14H16C17.1046 14 18 13.1046 18 12V2C18 0.89543 17.1046 0 16 0H2C0.89543 0 0 0.89543 0 2ZM2 14V2H16V12H5.334C4.90107 11.9988 4.47964 12.1393 4.134 12.4L2 14Z"
        fill="#fff"
        fill-opacity="0.7"
      />
    </svg>
  ),
  share: (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 21C14.418 21.0125 13.3924 20.5181 12.7282 19.6637C12.0641 18.8094 11.838 17.6935 12.117 16.648L5.857 13.07C4.77528 14.061 3.18968 14.2708 1.88749 13.5951C0.585292 12.9194 -0.156126 11.5022 0.0313673 10.0472C0.218861 8.59217 1.29533 7.40923 2.72628 7.08574C4.15722 6.76225 5.63786 7.36711 6.433 8.6L12.116 5.351C12.0425 5.07318 12.0035 4.78736 12 4.5C11.9857 2.82671 13.1478 1.37314 14.7832 1.01882C16.4186 0.6645 18.0781 1.50674 18.7576 3.03591C19.4371 4.56509 18.95 6.36122 17.591 7.3375C16.2319 8.31379 14.3743 8.20209 13.142 7.07L6.991 10.585C6.98491 10.8443 6.94866 11.1021 6.883 11.353L13.142 14.93C14.2943 13.8725 16.0088 13.7093 17.3399 14.5303C18.671 15.3513 19.2946 16.9567 18.8668 18.461C18.439 19.9653 17.0639 21.0023 15.5 21ZM15.5 16C14.6716 16 14 16.6716 14 17.5C14 18.3284 14.6716 19 15.5 19C16.3284 19 17 18.3284 17 17.5C17 16.6716 16.3284 16 15.5 16ZM3.5 9C2.67157 9 2 9.67157 2 10.5C2 11.3284 2.67157 12 3.5 12C4.32843 12 5 11.3284 5 10.5C5 9.67157 4.32843 9 3.5 9ZM15.5 3C14.6716 3 14 3.67157 14 4.5C14 5.32842 14.6716 6 15.5 6C16.3284 6 17 5.32842 17 4.5C17 3.67157 16.3284 3 15.5 3Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  ),
  download: (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 20H0V18H14V20ZM7 16L1 10L2.41 8.59L6 12.17V0H8V12.17L11.59 8.59L13 10L7 16Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  ),
};

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

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
          <div
            className={`postAction ${isLiked ? "postAction--active" : ""}`}
            onClick={() => setIsLiked(!isLiked)}
            style={{ color: isLiked ? "#52C3E6" : "white" }}
          >
            {icons.heart}
            <span>233</span>
          </div>
          <div className="postAction">
            {icons.comment}
            <span>12</span>
          </div>
          <div className="postAction">
            {icons.share}
            <span>3</span>
          </div>
          <div className="postAction">
            {icons.download}
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
