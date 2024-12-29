import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/header";
import LinkList from "./components/linkList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import backgroundImage1 from "./assets/app-background1.jpg";
import backgroundImage2 from "./assets/app-background2.jpg";
import backgroundImage3 from "./assets/app-background3.jpg";
import backgroundImage4 from "./assets/app-background4.jpg";

const backgrounds = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4,
];

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }`;
  }, []);

  return (
    <div className="container">
      <div className="App">
        <Header />
        <LinkList />
      </div>
    </div>
  );
}

library.add(fab, fas);
export default App;
