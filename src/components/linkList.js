import React from "react";
import SingleLink from "./singleLink";

const links = [
  {
    link: "https://www.etsy.com/shop/DesignByBitLion",
    title: "Our Etsy shop",
    icon: ["fas", "cart-shopping"],
    color: "green",
  },
  {
    link: "https://invideo.sjv.io/jrQK40",
    title: "Create videos like ours",
    icon: ["fas", "video"],
    color: "black",
  },
  {
    link: "https://namecheap.pxf.io/NKgy2b",
    title: "Get a domain for your project",
    icon: ["fas", "globe"],
    color: "black",
  },
  {
    link: "https://ssls.sjv.io/xLJe9x",
    title: "Get an SSL for your website",
    icon: ["fas", "lock"],
    color: "black",
  },
  {
    link: "https://easyship.ilbqy6.net/2aRo10",
    title: "Simplify your package shipments",
    icon: ["fas", "box"],
    color: "black",
  },
  {
    link: "https://godlikehost.sjv.io/7aXE5Y",
    title: "Start a gaming server",
    icon: ["fas", "gamepad"],
    color: "black",
  },
  {
    link: "https://united.elfm.net/DyWYK5",
    title: "Earn frequent flier miles",
    icon: ["fas", "plane"],
    color: "black",
  },
  {
    link: "https://www.youtube.com/@TheMarketMatrixTV",
    title: "The Market Matrix",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@BizarreFactsTV",
    title: "BizarreFacts",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@FamousRealQuotes",
    title: "Famous Real Quotes",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@ChillingStoriesTV",
    title: "Chilling Stories",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@LifeLogicTV",
    title: "Life Logic",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@HistoryUnfoldedTV",
    title: "History Unfolded",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@EnglishMinuteTV",
    title: "English Minute",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@MysteryMinutesTV",
    title: "Mystery Minutes",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@ParadoxPulseTV",
    title: "Paradox Pulse",
    icon: ["fab", "youtube"],
    color: "red",
  },
  {
    link: "https://www.youtube.com/@AncientGeniusTV",
    title: "Ancient Genius",
    icon: ["fab", "youtube"],
    color: "red",
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
