import logo from "../../logo.svg";
import Searchbar from "../Searchbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="dsdn logo" />
        <p>DSDN</p>
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
