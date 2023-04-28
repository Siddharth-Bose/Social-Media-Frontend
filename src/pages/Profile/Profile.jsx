import React from "react";
import "./Profile.css";
import ProfileLeft from "../../Components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profileCenter">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default Profile;
