import { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function ModalContainer({ setOpen, data, setData }) {
  const [localData, setLocalData] = useState(data);
  const { clicks } = localData;
  function close() {
    setOpen(false);
  }
  function submit() {
    setData({
      clicks,
    });
    close();
  }
  return ReactDOM.createPortal(
    <>
      <div className="modalShadow" onClick={close} />
      <div className="modal">
        <div className="modalBanner">New Clip</div>
        <div className="modalContent">
          <textarea
            name="modalText"
            id="modalText"
            cols="30"
            rows="10"
            placeholder="Write here..."
          ></textarea>
        </div>
        <div className="modalFooter">
          <div className="confirmButton" onClick={() => {}}>
            Add Media
          </div>
          <div className="confirmButton" onClick={submit}>
            Submit
          </div>
        </div>
      </div>
    </>,
    document.getElementById("app-modal")
  );
}
export function ModalExample(props) {
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
