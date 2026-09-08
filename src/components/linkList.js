import React from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";
import googlePlayBadge from "../assets/google_play.png";

const openWithoutPropagating = (url) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  window.open(url, "_blank", "noreferrer");
};

const links = [
  {
    link: "https://www.slowpulse.app/?utm_source=bitlionus",
    title: "SlowPulse - Impulse control for your phone",
    icon: (
      <div
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
        onClick={openWithoutPropagating("https://apps.apple.com/us/app/slowpulse/id6804510242")}
      >
        <img src={appStoreIcon} alt="Download on the App Store" width={150} />
      </div>
    ),
    color: "green",
  },
  {
    link: "https://www.budgetplantid.com?utm_source=bitlionus",
    title: "Budget Plant ID - identify plants without a subscription",
    icon: (
      <div
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
        onClick={openWithoutPropagating("https://apps.apple.com/us/app/budget-plant-id/id6747782540")}
      >
        <img src={appStoreIcon} alt="Download on the App Store" width={150} />
      </div>
    ),
    color: "green",
  },
  {
    link: "https://www.fluxtrade.net/?utm_source=bitlionus",
    title: "FluxTrade trading strategies",
    icon: ["fas", "dollar-sign"],
    color: "green",
  },
  {
    link: "https://www.etsy.com/shop/DesignByBitLion/?utm_source=bitlionus",
    title: "Our Etsy shop",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://bitlion.gumroad.com/",
    title: "Exit Velocity: Escape Your 9-5",
    icon: ["fas", "rocket"],
    color: "green",
  },
  {
    link: "https://chromewebstore.google.com/detail/auto-dark-mode/ececpikikiadgencgepkdkafekilbakj?authuser=1&hl=en&utm_source=bitlionus",
    title: "Auto Dark Mode Chrome extension",
    icon: ["fas", "moon"],
    color: "black",
  },
  {
    link: "https://www.mostlink.co?utm_source=bitlionus",
    title: "Mostlink - link page builder",
    icon: ["fas", "link"],
    color: "black",
  },
  {
    link: "https://etsy.me/3VUHXes",
    title: "Open an Etsy Shop and get 40 free listings!",
    icon: ["fas", "cart-shopping"],
    color: "green",
  },
];

const LinkList = ({ isLive }) => {
  return links.map((link) => {
    return (
      <SingleLink
        link={link.link}
        title={link.title}
        icon={link.icon}
        altText={link.altText}
        color={link.color}
        isLive={isLive}
      />
    );
  });
};

export default LinkList;
