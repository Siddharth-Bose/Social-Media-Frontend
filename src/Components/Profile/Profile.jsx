import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import './Profile.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

function Profile() {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard />
    </div>
  )
}

export default Profile
