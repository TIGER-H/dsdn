import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../contracts/interact";
import { Link } from "react-router-dom";
import { setUser } from "../../features/user/userSlice";
import {
  getUser,
  registerUser,
  useRegisterUserMutation,
} from "../../service/userService";
import icons from "./icons";
import "./sidebar.css";

import { FaRegCalendarAlt, FaChevronRight } from "react-icons/fa";
import {
  AiOutlineSetting,
  AiOutlineCreditCard,
  AiOutlineCopy,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [username, setUsername] = useState("Guest");

  // const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const register = async (username) => {
    const { address } = await connectWallet();
    const { data: registerData } = await registerUser({
      address,
      nickName: username,
    });
    // data: { code, data : { id }, message }

    if (registerData.code === 0) {
      console.log("注册成功");
      dispatch(
        setUser({
          username,
          accountId: address,
          uId: registerData.data.id,
        })
      );

      setAccountId(address);
      setUsername(username);
    }
  };

  const signIn = async () => {
    // connect to metamask
    const { address } = await connectWallet();

    // getUser by address
    const { code, data: accountData } = await getUser(address);

    if (code === 5005) {
      // user not found, open a form to register user
      setOpen(true);
    } else {
      // user exist, log in
      dispatch(
        setUser({
          username: accountData.nickName,
          accountId: accountData.address,
          uId: accountData.id,
        })
      );
      setAccountId(accountData.address);
      setUsername(accountData.nickName);
    }
  };

  const signOut = () => {
    dispatch(setUser({ username: "Guest", accountId: null, uId: null }));
  };

  useEffect(() => {
    getCurrentWalletConnected().then(({ address }) => {
      if (address) signIn();
    });
  }, []);

  return (
    <div className="sidebar">
      {accountId ? (
        <div className="sidebarUpper">
          <Link to={`/user/${accountId}`} className="avatarUser">
            <Avatar size={70} name={accountId} variant="beam" />
          </Link>
          <Link to={`/user/${accountId}`} className="username">
            {username}
          </Link>
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
          <Link className="showmoreButton" to={`user/${accountId}`}>
            Show More
          </Link>
        </div>
      ) : (
        <div className="guestLogin" onClick={signIn}>
          <Avatar size={45} name="Login" variant="beam" />
          <div className="guestLoginRight">
            <span className="loginText">Login {<FaChevronRight />}</span>
            <span className="loginDesc">Login with your wallet</span>
          </div>
          <FormDialog open={open} setOpen={setOpen} register={register} />
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

const FormDialog = ({ open, setOpen, register }) => {
  const [username, setUsername] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      // onClose={handleClose}
    >
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are new to this website, please enter your username here to
          register.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button onClick={() => register(username)}>Register</Button>
      </DialogActions>
    </Dialog>
  );
};

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
