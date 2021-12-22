import logo from "../../logo.svg";
import { ModalExample } from "../Modal/Modal";
import Searchbar from "../Searchbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <a className="header-logo" href="/">
          <img src={logo} alt="dsdn logo" />
          <p>DSDN</p>
        </a>
        <Searchbar />
        <ModalExample />
      </div>
    </div>
  );
};

export default Header;
