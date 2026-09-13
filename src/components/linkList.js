import React, { useEffect, useState } from "react";
import SingleLink from "./singleLink";
import appStoreIcon from "../assets/app_store.svg";

// iOS Safari blocks window.open() calls that pass a window-features string
// (it treats them as popups, which are blocked by default), so open a plain
// new tab and fall back to same-tab navigation when that is blocked too.
const openWithoutPropagating = (url) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  } else {
    window.location.href = url;
  }
};

const activateOnKey = (url) => (e) => {
  if (e.key === "Enter" || e.key === " ") {
    openWithoutPropagating(url)(e);
  }
};

const appStoreButton = (appStoreUrl) => (
  <div
    role="button"
    tabIndex={0}
    style={{ cursor: "pointer" }}
    onClick={openWithoutPropagating(appStoreUrl)}
    onKeyDown={activateOnKey(appStoreUrl)}
  >
    <img src={appStoreIcon} alt="Download on the App Store" width={150} />
  </div>
);

// Links that aren't part of the product catalog in public/apps.json. These are
// appended after everything the catalog contributes.
const extraLinks = [
  {
    link: "https://www.fluxtrade.net/?utm_source=bitlionus",
    title: "FluxTrade automated trading strategies",
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
    link: "https://etsy.me/3VUHXes",
    title: "Open an Etsy shop and get 40 free listings!",
    icon: ["fas", "cart-shopping"],
    color: "green",
  },
];

// A catalog entry only appears on the link page when it carries a `linkList`
// block. Shipped apps get the App Store badge as their icon; everything else
// falls back to the Font Awesome icon named in that block.
const toLink = (item) => {
  const showAppStore = Boolean(item.appStoreUrl) && !item.comingSoon;

  return {
    id: item.id,
    link: item.linkList.url,
    title: item.linkList.label || `${item.title} - ${item.tagline}`,
    icon: showAppStore ? appStoreButton(item.appStoreUrl) : item.linkList.icon,
    color: item.linkList.iconColor,
    comingSoon: Boolean(item.comingSoon),
  };
};

const LinkList = ({ isLive }) => {
  const [catalogLinks, setCatalogLinks] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.PUBLIC_URL}/apps.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`apps.json responded with ${res.status}`);
        }
        return res.json();
      })
      .then((catalog) => {
        if (cancelled) return;
        const items = [
          ...(catalog.apps || []),
          ...(catalog.extensions || []),
          ...(catalog.saas || []),
        ];
        setCatalogLinks(items.filter((item) => item.linkList).map(toLink));
      })
      .catch((err) => {
        console.error("Could not load apps.json", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {[...catalogLinks, ...extraLinks].map((link) => (
        <SingleLink
          key={link.id || link.link}
          link={link.link}
          title={link.title}
          icon={link.icon}
          color={link.color}
          comingSoon={link.comingSoon}
          isLive={isLive}
        />
      ))}
    </>
  );
};

export default LinkList;
