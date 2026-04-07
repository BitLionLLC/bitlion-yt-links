import React from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";
import googlePlayBadge from "../assets/google_play.png";

const links = [
  {
    link: "https://www.mostlink.co?utm_source=bitlionus",
    title: "Mostlink - link page builder",
    icon: ["fas", "link"],
    color: "black",
  },
  // {
  //   link: "https://stan.store/bitlion/?utm_source=bitlionus",
  //   title: "Our Stan Store - Learn how to escape your 9-5",
  //   icon: ["fas", "store"],
  //   color: "black",
  // },
  {
    link: "https://www.fluxtrade.net/?utm_source=bitlionus",
    title: "FluxTrade trading strategies (new affiliate program!)",
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
    link: "https://chromewebstore.google.com/detail/auto-dark-mode/ececpikikiadgencgepkdkafekilbakj?authuser=1&hl=en&utm_source=bitlionus",
    title: "Auto Dark Mode Chrome extension",
    icon: ["fas", "moon"],
    color: "yellow",
  },
  {
    link: "",
    title: "Budget Plant ID - identify plants without a subscription",
    icon: <div><a href="https://apps.apple.com/us/app/budget-plant-id/id6747782540"><img src={appStoreIcon} alt="App Store Icon" width={150} /></a><a href="https://play.google.com/store/apps/details?id=com.thebitlion.plantidentifierflutter"><img src={googlePlayBadge} width={150} alt="Google Play Icon" /></a></div>,
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
