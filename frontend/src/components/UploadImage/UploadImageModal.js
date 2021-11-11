import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UploadImage from "./index";

function UploadImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadImage />
        </Modal>
      )}
    </>
  );
}

export default UploadImageModal;
