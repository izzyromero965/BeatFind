import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UploadImage from "./index";
import "./UploadImage.css";

function UploadImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="uploadButton">
        Upload
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadImage setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default UploadImageModal;
