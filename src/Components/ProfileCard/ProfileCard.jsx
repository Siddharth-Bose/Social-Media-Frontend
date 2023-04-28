import React from "react";
import "./ProfileCard.css";
import cover from "../../img/cover.jpg";
import profile from "../../img/profileImg.jpg";

function ProfileCard() {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={cover} alt="coverImg" />
        <img src={profile} alt="profileImg" />
      </div>
      <div className="ProfileName">
        <span>Siddharth Bose</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>8458</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>8458</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
