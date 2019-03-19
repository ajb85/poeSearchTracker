import React from "react";
import styles from "./styles.module.scss";
import ScrollMenu from "../ScrollMenu";

function Dropdown(props) {
  return (
    <div className={styles.dropdown}>
      <p>{props.title}: </p>
      <button
        name="dropdown"
        type="button"
        onClick={() => props.clicks.clear(props.title)}
      >
        {props.defaultText ? props.defaultText : ""}
        <i className="fas fa-caret-down" />
      </button>
      <ScrollMenu visible={props.clicks.click} list={props.scrollData} />
    </div>
  );
}

export default Dropdown;
