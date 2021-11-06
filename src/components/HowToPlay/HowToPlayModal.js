import React from "react";
import styles from "./HowToPlay.module.css";
import Close from "../../assets/images/close.svg";

function HowToPlayModal({ close }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <img onClick={close} src={Close} alt="close" />
        <h3>How to Play</h3>
        <p>
          This game is commonly referred to as "Sliding Puzzle" and it is played
          by shifting blocks that are next to the puzzle box's vacant cell. All
          you have to do in this game is tap on the blocks that appear next to
          the vacant cell in order for those blocks to be moved into that cell.
          <br />
          The goal of the game is to arrange all of the blocks such that the
          numbers linked to them are in ascending order (smallest to largest),
          then place the empty cell in the bottom right corner of the box to
          finish the puzzle.
          <br />A timer is set, and your movements are counted to keep track of
          your progress. The more you practice, the faster and better you become
          👍
        </p>
      </div>
    </div>
  );
}

export default HowToPlayModal;
