import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SingleLink({ link, title, icon, color, isLive }) {
  return (
    <a href={link} className="single-link-a" target="_blank" rel="noreferrer">
      <div className="single-link">
        <div>{title} {title === "Twitch" ? isLive ? <span>- <span className="live-text">LIVE!</span></span> : <span>- Not live</span> : null}</div>
        <FontAwesomeIcon icon={icon} color={color} />
      </div>
    </a>
  )
}

export default SingleLink;
