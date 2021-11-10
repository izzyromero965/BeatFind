import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteImage from "./index";

function DeletePhotoModal({ id }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteImage id={+id} />
        </Modal>
      )}
    </>
  );
}

export default DeletePhotoModal;
