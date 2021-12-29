import btn1 from "./button-1.svg";
import btn2 from "./button-2.svg";
import "./searchbar.css";
import { useState } from "react";
import { ModalContainer } from "../Modal/Modal";
import { MdOutlineSearch } from "react-icons/md";

const Searchbar = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ text: "" });

  return (
    <div className="searchbar">
      <div className="search-input">
        {/* <img src={search} alt="search icon" /> */}
        <MdOutlineSearch />
        <input type="text" placeholder="Search inspiration" />
      </div>
      <div className="searchbar-buttons">
        {/* write post */}
        <div
          className="searchbar-button btn1"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={btn1} alt="button 1" />
        </div>
        <div className="searchbar-button btn2">
          <img src={btn2} alt="button 2" />
        </div>
        {open && (
          <ModalContainer setOpen={setOpen} data={data} setData={setData} />
        )}
      </div>
    </div>
  );
};

export default Searchbar;
