import React from "react";
import styles from "./Demo.module.css";
import Close from "../../assets/images/close.svg";
import Demo from "../../assets/gif/demo.gif";

function DemoModal({ close }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <img className={styles.close} onClick={close} src={Close} alt="close" />
        <h3>Game Demo</h3>
        <img className={styles.demo} src={Demo} alt="demo" />
      </div>
    </div>
  );
}

export default DemoModal;
