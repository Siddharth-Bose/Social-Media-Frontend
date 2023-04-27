import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png';
import Comment from '../../img/comment.png';
import Notification from '../../img/noti.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function RightSide() {
  return (
    <div className="rightSide">
        <div className="navIcon">
            <img src={Home} alt="Home" />
            <FontAwesomeIcon icon={faGear} />
            <img src={Notification} alt="Notification" />
            <img src={Comment} alt="Comments" />
        </div>
    </div>
  )
}

export default RightSide
