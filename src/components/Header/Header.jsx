import logo from "../../images/logo.svg";
import logoText from "../../images/logo-text.svg";
import Searchbar from "../Searchbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <a className="header-logo" href="/">
          <img src={logo} alt="dsdn logo" />
          <img src={logoText} alt="dsdn logotext" />
        </a>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
