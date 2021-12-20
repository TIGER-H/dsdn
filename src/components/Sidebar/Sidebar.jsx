import Avatar from "boring-avatars";
import icons from "./icons";
import "./sidebar.css";

const Sidebar = () => {
  console.log(icons.calander);
  return (
    <div className="sidebar">
      <div className="sidebarUpper">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/zh/thumb/6/61/ONE_PIECE_Logo.svg/280px-ONE_PIECE_Logo.svg.png"
          alt="avatar"
          className="avatarUser"
        /> */}
        <div className="avatarUser">
          <Avatar size={90} name="John Doe" variant="beam" />
        </div>
        <span className="username">One Piece</span>
        <span className="userAddr">0x4121eb...70cad37a {icons.copy}</span>
        <div className="userBadges">
          {icons.medal}
          {icons.medal}
          {icons.medal}
        </div>
        <button className="showmoreButton">Show More</button>
      </div>
      <div className="sidebarBottom">
        <ul>
          <li>
            <div className="sidebarBottomWrapper">
              {icons.calander}
              <span>Communicate</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomWrapper">
              {icons.communication}
              <span>History</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomWrapper">
              {icons.settings}
              <span>Account Setting</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomWrapper">
              {icons.wallet}
              <span>Wallet</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
