import React from "react";
import styles from "./PauseModal.module.css";

function PauseModal({ resume, quit, reference, restart }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <h3>Game Paused</h3>
        <button onClick={reference}>Reference Image</button>
        <button onClick={resume}>Resume</button>
        <button onClick={restart}>Restart</button>
        <button onClick={quit}>Quit</button>
      </div>
    </div>
  );
}

export default PauseModal;
