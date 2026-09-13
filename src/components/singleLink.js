import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SingleLink({ link, title, icon, color, isLive, comingSoon }) {
  const content = (
    <div className="single-link">
      <div>
        {title} {title === "Twitch" ? isLive ? <span>- <span className="live-text">LIVE!</span></span> : <span>- Not live</span> : null}
        {comingSoon ? <span className="coming-soon-chip">Coming soon</span> : null}
      </div>
      {React.isValidElement(icon) ? icon : <div className='fa-icon'><FontAwesomeIcon icon={icon} color={color} /></div>}
    </div>
  )

  return link ?
    (<a href={link} className="single-link-a" target="_blank" rel="noreferrer">
      {content}
    </a>)
    :
    (
    <div className="single-link-a">
      {content}
    </div>
    )

}

export default SingleLink;
