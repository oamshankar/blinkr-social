import React from "react";
import "./profile.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { ImSphere } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import Posts from "../posts/Posts";
export default function Profile(props){
    return(
        <div className="profile">
            <div className="images">
                <img src="https://source.unsplash.com/900x700/?beautiful-view" className="cover" alt="" />
                <img src="https://source.unsplash.com/600x900/?beautiful-woman" className="profilePic" alt="" />
            </div>
            <div className="profileContainer">
                <div className={`uInfo ${props.darkMode ? "dark": ""}`}>
                    <div className="left">
                        <a href="htttp://facebook.com">
                            <FaFacebook/>
                        </a>
                        <a href="htttp://instagram.com">
                            <FaInstagram/>
                        </a>
                        <a href="htttp://twitter.com">
                            <TfiTwitter/>
                        </a>
                        <a href="htttp://linkedin.com">
                            <FaLinkedin/>
                        </a>
                        <a href="htttp://pinterest.com">
                            <FaPinterest/>
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <CiLocationOn/>
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <ImSphere/>
                                <span>lama.dev</span>
                            </div> 
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <MdOutlineEmail/>
                        <IoMdMore/>
                    </div>
                </div>
                <Posts darkMode ={props.darkMode}/>
            </div>
        </div>
    )
}