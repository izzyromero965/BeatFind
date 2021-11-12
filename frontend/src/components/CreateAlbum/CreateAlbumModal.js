import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateAlbum from "./index";
import "./CreateAlbumModal.css";

function CreateAlbumModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="new-albumBtn">
        New Album
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbum setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumModal;
