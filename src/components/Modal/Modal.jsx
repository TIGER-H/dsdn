import { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

export function ModalContainer({ setOpen, data, setData }) {
  const [localData, setLocalData] = useState(data);
  const { text } = localData;

  function close() {
    setOpen(false);
  }

  function submit() {
    setData({
      text,
    });
    close();
  }
  
  return ReactDOM.createPortal(
    <>
      <div className="modalShadow" onClick={close} />
      <div className="modal">
        <div className="modalBanner">New Clip</div>
        <div className="modalClose" onClick={close}>
          <svg
            t="1640244753525"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3003"
            width="32"
            height="32"
          >
            <path
              d="M844.330667 179.669333a30.72 30.72 0 0 1 0 43.456l-288.853334 288.853334 288.853334 288.896a30.72 30.72 0 1 1-43.456 43.456l-288.853334-288.896-288.896 288.896a30.72 30.72 0 1 1-43.456-43.456L468.565333 512 179.669333 223.146667a30.72 30.72 0 0 1 43.456-43.456L512 468.522667l288.853333-288.853334a30.72 30.72 0 0 1 43.456 0z"
              fill="#52C3E6"
              p-id="3004"
            ></path>
          </svg>
        </div>
        <div className="modalContent">
          <textarea
            name="modalText"
            id="modalText"
            cols="30"
            rows="10"
            placeholder="Write here..."
            value={localData.text}
            onChange={({ target }) => {
              setLocalData({
                ...localData,
                text: target.value,
              });
            }}
          ></textarea>
        </div>
        <div className="modalFooter">
          <div className="modalAddMedia" onClick={() => {}}>
            <svg
              t="1640245222739"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3139"
              width="200"
              height="200"
            >
              <path
                d="M815.020408 167.183673a114.938776 114.938776 0 0 1 114.938776 114.938776v438.857143a114.938776 114.938776 0 0 1-114.938776 114.938775h-606.040816A114.938776 114.938776 0 0 1 94.040816 720.979592v-438.857143A114.938776 114.938776 0 0 1 208.979592 167.183673z m-459.755102 472.732735L221.936327 773.22449h266.637061L355.265306 639.916408z m290.230857-63.007347l-140.07902 124.510041 60.10253 60.081633c3.406367 3.427265 5.872327 7.439673 7.397878 11.723755H815.020408c2.821224 0 5.600653-0.20898 8.317388-0.668735l-177.841633-195.646694zM815.020408 229.877551h-606.040816A52.244898 52.244898 0 0 0 156.734694 282.122449v438.857143c0 8.380082 1.964408 16.300408 5.475265 23.322122l170.882612-170.882612a31.346939 31.346939 0 0 1 41.963102-2.15249l2.382368 2.15249 83.570939 83.591837 165.992489-147.539592a31.346939 31.346939 0 0 1 39.350858-1.880816l2.424163 1.985306 2.256979 2.236081 195.855674 215.45796c0.250776-2.068898 0.376163-4.179592 0.376163-6.290286v-438.857143a52.244898 52.244898 0 0 0-52.244898-52.244898zM344.816327 292.571429a104.489796 104.489796 0 1 1 0 208.979591 104.489796 104.489796 0 0 1 0-208.979591z m0 62.693877a41.795918 41.795918 0 1 0 0 83.591837 41.795918 41.795918 0 0 0 0-83.591837z"
                fill="white"
                p-id="3140"
              ></path>
            </svg>
          </div>
          <button className="modalBottomButton" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById("app-modal")
  );
}

// this is for test
export function ModalTest(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ clicks: 0 });
  return (
    <div>
      <div>Clicks: {data.clicks}</div>
      <button
        className="mainButton"
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </button>
      {open && (
        <ModalContainer
          {...props}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}
