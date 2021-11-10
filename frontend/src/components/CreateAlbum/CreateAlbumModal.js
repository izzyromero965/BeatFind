import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateAlbum from "./index";

function CreateAlbumModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>New Album</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbum />
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumModal;
