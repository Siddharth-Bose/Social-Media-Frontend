import React, { useState } from 'react'
import './InfoCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ProfileModal from '../ProfileModal/ProfileModal';

function InfoCard() {
    const [modalOpen, setModalOpen]=useState(false);
  return (
    <div className="infocard">
        <div className="infohead">
            <h4>Your Info</h4>
            <FontAwesomeIcon onClick={()=>setModalOpen(true)} icon={faPen} width={'2rem'} height={'1.2rem'}/>
            <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span><b>Lives In</b></span>
            <span>India</span>
        </div>
        <div className="info">
            <span><b>Works At</b></span>
            <span>IEMA R & D Pvt. Ltd.</span>
        </div>
        <button className="button lougout-button">Logout</button>
    </div>
  )
}

export default InfoCard
