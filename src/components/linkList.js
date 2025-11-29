import React from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";
import googlePlayBadge from "../assets/google_play.png";

const links = [
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
    link: "https://www.tripledev.co/?utm_source=bitlionus",
    title: "TripleDev Software Development Agency",
    icon: ["fas", "code"],
    color: "black",
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
