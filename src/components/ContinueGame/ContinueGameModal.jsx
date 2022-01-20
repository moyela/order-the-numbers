import React from "react";
import styles from "./ContinueGame.module.css";
import Confetti from "../../assets/images/confetti.svg";

function ContinueGameModal({ quit, continueGame, moves }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <h3>
          You Win! <img src={Confetti} alt="confetti" />
          <img src={Confetti} alt="confetti" />
        </h3>
        <p>Moves: {moves}</p>
        <p>{document.getElementById("timer").innerHTML}</p>
        <button onClick={continueGame}>Play Again</button>
        <button onClick={quit}>Quit</button>
      </div>
    </div>
  );
}

export default ContinueGameModal;
