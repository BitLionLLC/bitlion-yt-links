import React from "react";
import SingleLink from "./singleLink";

const links = [
  {
    link: "https://invideo.sjv.io/jrQK40",
    title: "Create videos like ours",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://namecheap.pxf.io/NKgy2b",
    title: "Get a domain for your project",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://ssls.sjv.io/xLJe9x",
    title: "Get an SSL for your website",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://easyship.ilbqy6.net/2aRo10",
    title: "Simplify your package shipments",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://godlikehost.sjv.io/7aXE5Y",
    title: "Start a gaming server",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://laganoo.pxf.io/LK0jXV",
    title: "Start selling online",
    icon: ["fas", "cart-shopping"],
    color: "blue",
  },
  {
    link: "https://united.elfm.net/DyWYK5",
    title: "Earn frequent flier miles",
    icon: ["fas", "cart-shopping"],
    color: "blue",
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
