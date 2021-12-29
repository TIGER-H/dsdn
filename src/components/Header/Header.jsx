import logo from "../../images/logo.svg";
import logoText from "../../images/logo-text.svg";
import Searchbar from "../Searchbar";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <Link className="header-logo" to={'/'}>
          <img src={logo} alt="dsdn logo" />
          <img src={logoText} alt="dsdn logotext" />
        </Link>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
