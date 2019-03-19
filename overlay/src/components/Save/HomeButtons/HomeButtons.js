import React from "react";
import styles from "./styles.module.scss";

function HomeButtons(props) {
  return (
    <React.Fragment>
      <button className={`${styles.buttons} ${styles.switch}`} type="button">
        <i class="fas fa-exchange-alt" />
      </button>
      <button className={`${styles.buttons} ${styles.new}`} type="button">
        New
      </button>
      <button
        className={`${styles.buttons} ${styles.save}`}
        type="button"
        onClick={() => {
          if (props.hideSave) {
            props.focus();
          }
          props.setHideSave(
            typeof props.hideSave === "boolean" ? !props.hideSave : false
          );
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
}

export default HomeButtons;
