import React from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";
import googlePlayBadge from "../assets/google_play.png";

const links = [
  {
    link: "https://stan.store/affiliates/514cd9ae-ed8f-4653-b008-8a2889b7d79b",
    title: "The Digital Marketing Mini-Course - Learn how we make $8k/mo",
    icon: ["fas", "video"],
    color: "red",
  },
  {
    link: "https://stan.store/bitlion/?utm_source=bitlionus",
    title: "Our Stan Store - Learn how to escape your 9-5",
    icon: ["fas", "store"],
    color: "black",
  },
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
