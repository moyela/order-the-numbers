import React from "react";
import styles from "./Reference.module.css";
import Close from "../../assets/images/close.svg";
import Reference from "../../assets/images/reference.png";

function ReferenceModal({ close }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <img className={styles.close} onClick={close} src={Close} alt="close" />
        <h3>Reference Image</h3>
        <img className={styles.reference} src={Reference} alt="reference" />
      </div>
    </div>
  );
}

export default ReferenceModal;
