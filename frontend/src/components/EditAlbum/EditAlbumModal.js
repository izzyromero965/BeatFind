import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditAlbum from "./index";

function EditAlbumModal({ id }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAlbum id={+id} />
        </Modal>
      )}
    </>
  );
}

export default EditAlbumModal;
