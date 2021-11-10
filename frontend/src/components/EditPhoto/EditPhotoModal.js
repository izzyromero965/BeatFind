import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditPhoto from "./index";

function EditPhotoModal({ id }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhoto id={+id} />
        </Modal>
      )}
    </>
  );
}

export default EditPhotoModal;
