import React from 'react';
import './Home.css';
import Profile from '../../Components/Profile/Profile';

const Home = () => {
  return (
    <div className="home">
        <div className="profileSide"><Profile/></div>
        <div className="postSide">Posts</div>
        <div className="rightSide">Right</div>
    </div>
  )
}

export default Home
