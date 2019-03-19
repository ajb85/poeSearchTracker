import React, { useEffect } from "react";
import "./css/reset.css";
import "./css/globalStyles.css";
import Save from "./components/Save";
//import Popup from "./components/Popup";

function App() {
  const links = {
    Interrobang: {
      active: true,
      saves: [
        { name: "Inpulsa", link: "http://poe.trade/search/goaomaninausiw" },
        {
          name: "Flask Effect Belt",
          link: "http://poe.trade/search/nigahumesinina"
        },
        { name: "Boots", link: "http://poe.trade/search/sikoosihigohot" },
        { name: "+2 Ring", link: "http://poe.trade/search/utenorurarenan" },
        {
          name: "Purity Amulet",
          link: "http://poe.trade/search/euzuamarahahei"
        },
        { name: "+30% Gloves", link: "http://poe.trade/search/ohokahokakohiw" },
        { name: "RF Jewel", link: "http://poe.trade/search/nitounomionoko" },
        {
          name: "Watcher 1-Stat",
          link: "http://poe.trade/search/huramariteraga"
        },
        {
          name: "Corrupted Ahn's",
          link: "http://poe.trade/search/ioninariyotoni"
        },
        {
          name: "Purity of Ice 21",
          link: "http://poe.trade/search/utonosikikiwok"
        },
        { name: "RF Helm", link: "http://poe.trade/search/umkosisionahiz" }
      ]
    },
    Shamshire: {
      active: false,
      saves: [
        { name: "Lorem Ipsum", link: "http://poe.trade/search/goaomaninausiw" },
        { name: "Mehs", link: "http://poe.trade/search/goaomaninausiw" },
        { name: "Blah", link: "http://poe.trade/search/goaomaninausiw" }
      ]
    }
  };

  const updateActive = active => {
    for (let profile in links) {
      if (profile === active) {
        profile[links].active = true;
      } else {
        profile[links].active = false;
      }
    }
  };

  return (
    <div>
      <Save links={links} updateActive={updateActive} />
    </div>
  );
}

export default App;

/*
<Popup links={links} updateActive={updateActive} />
chrome.storage.sync.get(["profiles"], function(obj) {
  if (obj) {
    const savedSearches = obj.profiles ? obj.profiles : {};
    checkForNoProfiles(savedSearches);
  }
});
}
*/
