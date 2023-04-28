import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png';
import Comment from '../../img/comment.png';
import Notification from '../../img/noti.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

function RightSide() {
  const [modalOpen, setmodalOpen] = useState(false)
  return (
    <div className="rightSide">
        <div className="navIcon">
            <img src={Home} alt="Home" />
            <FontAwesomeIcon icon={faGear} />
            <img src={Notification} alt="Notification" />
            <img src={Comment} alt="Comments" />
        </div>
        <TrendCard />
        <button className="button r-button" onClick={()=>{setmodalOpen(true)}}>
          Share
        </button>
        <ShareModal modalOpen={modalOpen} setModalOpen={setmodalOpen} />
    </div>
  )
}

export default RightSide
