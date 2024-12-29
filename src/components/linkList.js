import React from "react";
import SingleLink from "./singleLink";

const links = [
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
