import React from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";
import googlePlayBadge from "../assets/google_play.png";

const links = [
  {
    link: "https://www.tripledev.co",
    title: "TripleDev Software Development Agency",
    icon: ["fas", "code"],
    color: "black",
  },
  {
    link: "https://www.fluxtrade.net",
    title: "FluxTrade trading strategies (new affiliate program!)",
    icon: ["fas", "dollar-sign"],
    color: "green",
  },
  {
    link: "https://www.etsy.com/shop/DesignByBitLion",
    title: "Our Etsy shop",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "",
    title: "Budget Plant ID - identify plants without a subscription",
    icon: <div><a href="https://apps.apple.com/us/app/budget-plant-id/id6747782540"><img src={appStoreIcon} alt="App Store Icon" width={150} /></a><a href="https://play.google.com/store/apps/details?id=com.thebitlion.plantidentifierflutter"><img src={googlePlayBadge} width={150} alt="Google Play Icon" /></a></div>,
    color: "green",
  },
  {
    link: "",
    title: "Astral Life - Read your tarot card photos",
    icon: <div><a href="https://play.google.com/store/apps/details?id=com.thebitlion.astraltarotreader"><img src={googlePlayBadge} width={150} alt="Google Play Icon" /></a></div>,
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
