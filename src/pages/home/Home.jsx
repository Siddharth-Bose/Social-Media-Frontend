import React from 'react';
import './Home.css';
import Profile from '../../Components/Profile/Profile';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const Home = () => {
  return (
    <div className="home">
        <div className="profileSide"><Profile/></div>
        <div className="postSide"><PostSide /></div>
        <div className="rightSide"><RightSide /></div>
    </div>
  )
}

export default Home
