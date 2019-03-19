import React, { useState } from "react";
import styles from "./styles.module.scss";

function InputName(props) {
  return (
    <div className={styles.inputBox}>
      <p>Save as Name: </p>
      <input
        ref={props.input}
        type="text"
        value={props.name}
        onChange={e => props.updateName(e)}
        autoFocus
      />
    </div>
  );
}

export default InputName;
