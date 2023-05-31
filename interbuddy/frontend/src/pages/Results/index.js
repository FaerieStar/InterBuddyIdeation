import Modal from "react-modal";
import React, { useState } from "react";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 700,
    },
};

function ResultPage(props) {
    const [modalOpen, setModalOpen] = useState(props);
    return (
        <>
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={customStyles}
            >
                <button className='button-back' onClick={() => setModalOpen(false)}>Close Results</button>
            </Modal>
        </>
    )
}

export default ResultPage;