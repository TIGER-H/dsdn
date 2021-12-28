import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../contracts/interact";
import { setUser } from "../../features/user/userSlice";
import { getUser, useRegisterUserMutation } from "../../service/userService";
import icons from "./icons";
import "./sidebar.css";

import { FaRegCalendarAlt, FaChevronRight } from "react-icons/fa";
import {
  AiOutlineSetting,
  AiOutlineCreditCard,
  AiOutlineCopy,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

const Sidebar = () => {
  const [accountId, setAccountId] = useState("");
  const [username, setUsername] = useState("Guest");

  // const { data } = useGetUserByAddressQuery(address);
  const [registUser, result] = useRegisterUserMutation();
  // console.log(data);

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

  const signIn = async () => {
    // connect to metamask
    const { address } = await connectWallet();

    // getUser by address
    const { code, data: accountData } = await getUser(address);

    if (code === 5005) {
      // 用户不存在
      const { data: registerData } = await registUser({
        address,
      });
      // data: {code, data : {id}, message}

      if (registerData.code === 0) {
        console.log("注册成功");
        dispatch(
          setUser({
            username: "New User",
            accountId: address,
            uId: registerData.data.id,
          })
        );

        setAccountId(address);
        setUsername("New User");
      }
    } else {
      // user exists!
      console.log("loging in ");
      dispatch(
        setUser({
          username: "Hello Web3",
          accountId: accountData.address,
          uId: accountData.id,
        })
      );
      setAccountId(accountData.address);
      setUsername("Hello Web3");
    }
  };

  const signOut = () => {
    dispatch(setUser({ username: "Guest", accountId: null, uId: null }));
  };

  useEffect(() => {
    getCurrentWalletConnected().then(({ address }) => {
      if (address) signIn();
    });
  });

  return (
    <div className="sidebar">
      {accountId ? (
        <div className="sidebarUpper">
          <div className="avatarUser">
            <Avatar size={70} name={accountId} variant="beam" />
          </div>
          <span className="username">{username}</span>
          <span className="userAddr">
            <div className="userAddrText">{accountId}</div>
            <div className="copyUserAddr">
              <AiOutlineCopy />
            </div>
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
          <Avatar size={45} name="Login" variant="beam" />
          <div className="guestLoginRight">
            <span className="loginText">Login {<FaChevronRight />}</span>
            <span className="loginDesc">Login with your wallet</span>
          </div>
        </div>
      )}
      <div className="sidebarBottom">
        <ul>
          <li>
            <div className="sidebarBottomItem">
              <BsPeople />
              <span>Communicate</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem">
              <FaRegCalendarAlt />
              <span>History</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem" onClick={signOut}>
              <AiOutlineSetting />
              <span>Account Setting</span>
            </div>
          </li>
          <li>
            <div className="sidebarBottomItem" onClick={signIn}>
              <AiOutlineCreditCard />
              <span>Wallet</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
