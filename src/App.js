import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import LinkList from "./components/linkList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import keeflerLogo from "./assets/keefler-logo.png";
import axios from "axios";

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
  const [isLiveOnTwitch, setIsLiveOnTwitch] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }`;
  }, []);

  useEffect(() => {
    axios
      .post(
        `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_TWITCH_API_CLIENT_SECRET}&grant_type=client_credentials`
      )
      .then((res) => {
        const token = res.data.access_token;
        const config = {
          headers: {
            "Client-ID": "fnqmo60hbl4l677epnry648yxie2tn",
            Accept: "application/vnd.twitchtv.v5+json",
            Authorization: `Bearer ${token}`,
          },
        };

        axios
          .get(
            "https://api.twitch.tv/helix/search/channels?query=keefler_elf",
            config
          )
          .then((res1) => {
            const correctChannel = res1.data.data.find(
              (channel) => channel.id === "433762691"
            );
            if (correctChannel.is_live) {
              setIsLiveOnTwitch(true);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      {/* <div className="logo left-logo">
        <img src={keeflerLogo} width="300" alt="keefler logo" />
      </div> */}
      <div className="App">
        <Header />
        <iframe
          title="Music"
          style={{
            "border-radius": "12px",
            marginTop: "10px",
            width: "clamp(200px, 100%, 600px)",
            height: "375px",
          }}
          src="https://open.spotify.com/embed/playlist/3WAb6ZfS3n6ZXQPTMBYQs9?utm_source=generator&theme=0"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="Music Video"
          style={{
            marginTop: "50px",
            marginBottom: "40px",
            width: "clamp(200px, 100%, 600px)",
            borderRadius: "15px",
            height: "375px",
          }}
          src="https://www.youtube.com/embed/-DfHnyYowHA?si=cjy_dCxgbTWigllj"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <LinkList isLive={isLiveOnTwitch} />
      </div>
      {/* <div className="logo right-logo">
        <img src={keeflerLogo} width="300" alt="keefler logo" />
      </div> */}
    </div>
  );
}

library.add(fab, fas);
export default App;
