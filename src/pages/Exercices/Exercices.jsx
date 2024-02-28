import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Exercices.css";
import Modal from "react-modal";
import ExercicesList from "../../components/ExercicesList/ExercicesList";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
};

const Exercies = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [exercices, setExercice] = useState([]);
  const [input, setInput] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function addExercice() {
    setExercice((prevExercices) => [...prevExercices, input]);
    closeModal();
  }
  function removeExercice(index) {
    setExercice((prevExercices) => prevExercices.filter((_, i) => i !== index));
  }

  return (
    <>
      <NavBar />
      <div className="container exercices-container">
        <h1>exercices list</h1>
        <ExercicesList
          exercices={exercices}
          removeExercice={removeExercice}
        ></ExercicesList>
        <button onClick={openModal}>Add new exercise</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          {" "}
          <h2 className="model-head">Add an exercise</h2>
          <input
            type="text"
            placeholder="Name of the exercise"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={addExercice}>add exercise</button>
        </div>
      </Modal>
    </>
  );
};

export default Exercies;
