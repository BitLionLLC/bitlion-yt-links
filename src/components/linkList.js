import React from "react";
import SingleLink from "./singleLink";

const links = [
  {
    link: "https://open.spotify.com/artist/3t3zKVdiWERcdDHg6ei89c",
    title: "Spotify",
    icon: ["fab", "spotify"],
    color: "#1DB954",
  },
  {
    link: "https://www.twitch.tv/keefler_elf",
    title: "Twitch",
    icon: ["fab", "twitch"],
    color: "#6441a5",
  },
  {
    link: "https://discord.gg/MsEwjY2",
    title: "Join the Discord!",
    icon: ["fab", "discord"],
    color: "#5865F2",
  },
  {
    link: "https://twitter.com/keefler_elf",
    title: "Twitter",
    icon: ["fab", "twitter"],
    color: "#00acee",
  },
  {
    link: "https://www.instagram.com/keefler_elf",
    title: "Instagram",
    icon: ["fab", "instagram"],
    color: "#3f729b",
  },
  {
    link: "https://www.tiktok.com/@keefler_elf",
    title: "TikTok",
    icon: ["fab", "tiktok"],
  },
  {
    link: "https://www.bonfire.com/store/keeflers-very-diverse-store/",
    title: "'Not High' Merch",
    icon: ["fas", "shopping-cart"],
  },
  {
    link: "https://www.yasglass.com/not-high-pipes.html",
    title: "'Not High' Pipes",
    icon: ["fas", "joint"],
  },
  {
    link: "https://onlyfans.com/keefler_elf",
    title: "OnlyFans",
    icon: ["fas", "lock"],
    color: "#00AFF0",
  },
  {
    link: "https://www.amazon.com/hz/wishlist/ls/2NDKMZL4ULQ61",
    title: "Amazon Wishlist",
    icon: ["fab", "amazon"],
    color: "#b16501",
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
