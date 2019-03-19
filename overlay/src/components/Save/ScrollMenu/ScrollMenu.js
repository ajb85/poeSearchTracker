import React from "react";
import styles from "./styles.module.scss";

function ScrollMenu(props) {
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`${styles.scrollMenu} ${
          props.visible ? "" : styles.inactive
        } `}
      >
        <div className={styles.arrow} />
        {props.list.map(item => (
          <p key={item.name}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ScrollMenu;
