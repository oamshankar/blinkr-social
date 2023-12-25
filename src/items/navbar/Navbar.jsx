import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
import { LuHome } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineGridView } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
export default function Navbar(props){
    return(
        <div className={`navbar ${props.darkMode ? "dark":""}`}>
            <div className="nav-left">
                <Link to="/layout" style={{textDecoration : "none"}}>
                    <span>blinkr</span>
                </Link>
                <LuHome/>
                {props.darkMode ? <MdOutlineWbSunny onClick={() => props.toggleDark()}/> :<FaRegMoon onClick={() => props.toggleDark()}/>}
                <MdOutlineGridView/>
                <div className="search">
                    <IoSearchOutline/>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="nav-right">
                    <FaRegUser/>
                    <MdOutlineMailOutline/>
                    <FaRegBell/>
                    <div className="user">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span>{props.userName}</span>
                    </div>
                </div>
        </div>
    )
}