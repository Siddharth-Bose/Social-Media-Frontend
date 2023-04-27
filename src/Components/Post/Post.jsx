import React from 'react'
import './Post.css'
import Heart from '../../img/like.png'
import Dislike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

function Post({data}) {
  return (
    <div className="post">
        <img src={data.img} alt="Post" />
        <div className="postReact">
            <img src={data.liked? Heart: Dislike} alt="Like/Dislike" />
            <img src={Comment} alt="Comment" />
            <img src={Share} alt="Share" />
        </div>
        <span>{data.likes} likes</span>
        <div className="details">
            <span><b>{data.name}</b> </span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post
