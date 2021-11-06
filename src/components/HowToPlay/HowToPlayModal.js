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
          This game is popularly called "Sliding Puzzle" which is played by
          moving blocks that are adjacent to the empty cell in the puzzle box.<br />
          In this game, all you have to do is tap on a valid movable block
          (adjacent to the empty cell) to move the block to the desired
          position. The objective of the game is to arrange all the blocks such
          that the numbers attached to the blocks are in ascending order
          (smallest to largest), positioning the empty cell at the bottom right
          corner of the box to complete the puzzle. There's a timer and your
          moves are being counted to keep track of your performance. The more
          you practice, the faster you become 👍 <br />
          <br />
          Hint: Complete each row (horizontal axis) accordingly till the very
          last. Good luck!
        </p>
      </div>
    </div>
  );
}

export default HowToPlayModal;
