import Avatar from "boring-avatars";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useNear } from "../../hooks/useNear";
import icons from "./icons";
import "./sidebar.css";

const Sidebar = () => {
  const [accountId, setAccountId] = useState();
  const [username, setUsername] = useState("");
  const wallet = useNear();

  const signIn = () => {
    wallet.then((wallet) => {
      wallet.requestSignIn();
    });
  };

  const signOut = () => {
    wallet.then((wallet) => {
      wallet.signOut();
      setAccountId(null);
    });
  };

  useEffect(() => {
    wallet.then((wallet) => {
      setAccountId(wallet.getAccountId());
    });
  }, [accountId]);

  return (
    <div className="sidebar">
      <div className="sidebarUpper">
        <div className="avatarUser">
          <Avatar size={70} name="John Doe" variant="beam" />
        </div>
        <span className="username">{username || "One Piece"}</span>
        <span className="userAddr">
          {accountId || "0x4121eb...70cad37a"} {icons.copy}
        </span>
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
            <div className="sidebarBottomItem" onClick={signOut}>
              {icons.settings}
              <span>Account Setting</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem" onClick={signIn}>
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
