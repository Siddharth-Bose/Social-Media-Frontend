import React, {useState, useRef} from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef= useRef();
  const onImageChange = (e) =>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      })
      console.log(image);
    }
  }
  return (
    <div className="postshare">
      <img src={ProfileImg} alt="Profile" />
      <div>
        <input type="text" placeholder="What's Happening?" />
        <div className="postOptions">
          <div className="option" style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()}>
            <FontAwesomeIcon icon={faImage} />
            Photo
          </div>
          <div className="option" style={{color: "var(--video)"}}>
            <FontAwesomeIcon icon={faCirclePlay} />
            Video
          </div>
          <div className="option" style={{color: "var(--location)"}}>
            <FontAwesomeIcon icon={faLocationDot} />
            Location
          </div>
          <div className="option" style={{color: "var(--shedule)"}}>
            <FontAwesomeIcon icon={faCalendarDays} />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{display:"none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>
        {
          image && (
            <div className="previewImage">
              <FontAwesomeIcon icon={faTimesCircle} onClick={()=>{setImage(null)}}/>
              <img src={image.image} alt="preview" />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default PostShare;
