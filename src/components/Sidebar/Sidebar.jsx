import Avatar from "boring-avatars";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { useGetUserByAddressQuery } from "../../service/userService";
import icons from "./icons";
import "./sidebar.css";

const Sidebar = () => {
  const [accountId, setAccountId] = useState("");
  const [username, setUsername] = useState("Guest");

  const address = "fake";
  const { data } = useGetUserByAddressQuery(address);
  console.log(data);

  const dispatch = useDispatch();

  // NEAR sign logic
  // const wallet = useNear();
  // const signIn = () => {
  //   wallet.then((wallet) => {
  //     wallet.requestSignIn();
  //   });
  // };
  // const signOut = () => {
  //   wallet.then((wallet) => {
  //     wallet.signOut();
  //     setAccountId(null);
  //     setUsername("Guest");
  //     dispatch(setUser({ username: "Guest", accountId: null }));
  //   });
  // };
  // useEffect(() => {
  //   wallet.then((wallet) => {
  //     if (wallet.isSignedIn()) {
  //       setAccountId(wallet.getAccountId());
  //       setUsername("User");
  //       dispatch(
  //         setUser({ accountId: wallet.getAccountId(), username: "User" })
  //       );
  //     }
  //   });
  // }, [accountId]);

  const signIn = () => {
    //
    if (data) {
      dispatch(
        setUser({
          username: "default",
          accountId: address,
          uId: data.data.id,
        })
      );
      setAccountId(address);
      setUsername("default");
    }
  };

  const signOut = () => {
    dispatch(setUser({ username: "Guest", accountId: null, uId: null }));
  };

  return (
    <div className="sidebar">
      {accountId ? (
        <div className="sidebarUpper">
          <div className="avatarUser">
            <Avatar size={70} name="1243" variant="beam" />
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
      ) : (
        <div className="guestLogin" onClick={signIn}>
          <Avatar size={45} name="1243" variant="beam" />
          <div className="guestLoginRight">
            <span className="loginText">Login {icons.loginArr}</span>
            <span className="loginDesc">Login with your wallet</span>
          </div>
        </div>
      )}
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
