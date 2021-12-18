import search from "./search.svg";
import btn1 from "./button-1.svg";
import btn2 from "./button-2.svg";
import "./searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-input">
        <img src={search} alt="search icon" />
        <input type="text" placeholder="Search inspiration" />
      </div>
      <div className="searchbar-buttons">
        <div className="searchbar-button btn1">
          <img src={btn1} alt="button 1" />
        </div>
        <div className="searchbar-button btn2">
          <img src={btn2} alt="button 2" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
