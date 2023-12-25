import React from "react";
import { GiThreeFriends } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiMemoriesFill } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { PiGameControllerDuotone } from "react-icons/pi";
import { BiPhotoAlbum } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiFundsLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { SiCoursera } from "react-icons/si";
import "./leftbar.css";
export default function Leftbar(props){
    return(
        <div className={`leftBar ${props.darkMode ? "dark": ""}`}>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span>{props.userName}</span>
                    </div>
                    <div className="leftb-items">
                        <GiThreeFriends/>
                        <span>Friends</span>
                    </div>
                    <div className="leftb-items">
                        <MdGroups/>
                        <span>Groups</span>
                    </div>
                    <div className="leftb-items">
                        <AiTwotoneShop/>
                        <span>Marketplace</span>
                    </div>
                    <div className="leftb-items">
                        <MdOutlineWatchLater/>
                        <span>Watch</span>
                    </div>
                    <div className="leftb-items">
                        <RiMemoriesFill/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="leftb-items">
                        <MdEvent/>
                        <span>Events</span>
                    </div>
                    <div className="leftb-items">
                        <PiGameControllerDuotone/>
                        <span>Gamings</span>
                    </div>
                    <div className="leftb-items">
                        <BiPhotoAlbum/>
                        <span>Gallery</span>
                    </div>
                    <div className="leftb-items">
                        <CiVideoOn/>
                        <span>Videos</span>
                    </div>
                    <div className="leftb-items">
                        <BiMessageSquareDetail/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="leftb-items">
                        <RiFundsLine/>
                        <span>Fundraiser</span>
                    </div>
                    <div className="leftb-items">
                        <SlNotebook/>
                        <span>Tutorials</span>
                    </div>
                    <div className="leftb-items">
                        <SiCoursera/>
                        <span>Courses</span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}