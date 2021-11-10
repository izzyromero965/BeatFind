import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteAlbum from "./index";

function DeleteAlbumModal({ id }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteAlbum id={+id} />
        </Modal>
      )}
    </>
  );
}

export default DeleteAlbumModal;
