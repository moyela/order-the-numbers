import React from "react";
import { useHistory } from "react-router-dom";
import Puzzle from "../../assets/images/puzzle.svg";
import styles from "./Intro.module.css";

function Intro() {
  let history = useHistory();
  setTimeout(() => {
    history.push("/game");
  }, 7000);

  return (
    <div className={styles.container}>
      <img src={Puzzle} alt="puzzle" />
      <h3>Order the Numbers</h3>
      <p style={{color: white; margin: 20px}}>please wait...</p>
    </div>
  );
}

export default Intro;
