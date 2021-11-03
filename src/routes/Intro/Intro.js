import React from "react";
import { useHistory } from "react-router-dom";
import Puzzle from "../../assets/images/puzzle.svg";
import styles from "./Intro.module.css";

function Intro() {
  let history = useHistory();
  setTimeout(() => {
    history.push("/game");
  }, 12000);

  return (
    <div className={styles.container}>
      <img src={Puzzle} alt="puzzle" />
      <h3>Number Puzzle</h3>
    </div>
  );
}

export default Intro;
