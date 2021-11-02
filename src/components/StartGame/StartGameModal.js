import React from "react";
import styles from "./StartGame.module.css";
import Puzzle from "../../assets/images/puzzle.svg";
import Rocket from "../../assets/images/rocket.svg";

function StartGameModal({ howToPlayModal, startGame }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <img src={Puzzle} alt="puzzle" />
        <h3>Number Puzzle</h3>
        <button onClick={howToPlayModal}>How to Play</button>
        <button onClick={startGame}>
          Start Game
          <img src={Rocket} alt="rocket" />
        </button>
      </div>
    </div>
  );
}

export default StartGameModal;
