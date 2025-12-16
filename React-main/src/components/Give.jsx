import React, { useState } from "react";
import GivePage from "../pages/GivePage";
import "./index.css";

function Donate() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="donate-section">
      {/* Donate CTA button */}
      <button className="donate-btn" onClick={() => setOpenModal(true)}>
        Give
      </button>

      {/* Modal Overlay */}
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            {/* Render GivePage inside modal */}
            <GivePage />
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;
