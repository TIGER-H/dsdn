import Avatar from "boring-avatars";
import icons from "./icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarUpper">
        <div className="avatarUser">
          <Avatar size={70} name="John Doe" variant="beam" />
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
            <div className="sidebarBottomItem">
              {icons.calander}
              <span>Communicate</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem">
              {icons.communication}
              <span>History</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem">
              {icons.settings}
              <span>Account Setting</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem">
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
