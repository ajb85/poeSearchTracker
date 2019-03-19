import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Dropdown from "./Dropdown";
import InputName from "./InputName";
import HomeButtons from "./HomeButtons";

function Save(props) {
  // Refs
  let input = React.createRef();
  // Input Hooks
  const [profiles, updateProfiles] = useInput(props.profiles);
  const [name, updateName, setName] = useInput();
  // Click management hooks
  const [profileClick, setProfileClick] = useState(false);
  const [existingClick, setExistingClick] = useState(false);
  // Classname hook
  const [hideSave, setHideSave] = useState("initial");
  // Click-control functions
  const _focusInput = () => input.current.focus();
  const clearClicks = click => {
    if (click === "Profile") {
      setProfileClick(!profileClick);
      setExistingClick(false);
    } else {
      setProfileClick(false);
      setExistingClick(!existingClick);
    }
  };
  // Temporary active profile management
  const [activeProf, setActiveProf] = useState();
  useEffect(() => {
    chrome.storage.onChanged.addListener(changes => {
      // When profile changes
      console.log(changes);
    });

    chrome.storage.sync.get(["profiles"], profiles => {
      console.log("Synced profiles: ", profiles);
    });

    chrome.storage.sync.set({ profiles: data }, () => {
      //console.log("saved: ", data);
    });

    for (let profile in props.links) {
      if (props.links[profile].active) {
        setActiveProf(profile);
      }
    }
  }, []);

  const submitLink = e => {
    e.preventDefault();
    // Save Link
    setName("");
    setHideSave(true);
  };
  const profs = [];

  for (let profile in props.links) {
    profs.push({ name: profile });
  }
  let appClassName = `${styles.App}`;
  if (hideSave !== "initial") {
    appClassName += ` ${hideSave ? styles.hide : styles.show}`;
  }
  return (
    <React.Fragment>
      <HomeButtons
        hideSave={hideSave}
        setHideSave={setHideSave}
        focus={_focusInput}
      />
      <div
        className={appClassName}
        onClick={e => {
          if (!e.target.name) {
            setProfileClick(false);

            setExistingClick(false);
          }
        }}
      >
        <h2>Save Link</h2>
        <i
          onClick={() => setHideSave(!hideSave)}
          className={`${styles.close} fas fa-times`}
        />
        <form onSubmit={submitLink}>
          <Dropdown
            title={"Profile"}
            defaultText={activeProf}
            updateActive={props.updateActive}
            scrollData={profs}
            clicks={{
              click: profileClick,
              clear: clearClicks
            }}
          />
          <Dropdown
            title={"Update Existing Link"}
            scrollData={activeProf ? props.links[activeProf].saves : []}
            clicks={{
              click: existingClick,
              set: setExistingClick,
              clear: clearClicks
            }}
          />
          <InputName name={name} updateName={updateName} input={input} />
          <button className={styles.submit} type="submit">
            Save Link
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const updateValue = e => {
    setValue(e.target.value);
  };

  return [value, updateValue, setValue];
};

export default Save;
