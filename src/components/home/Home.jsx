import React from "react";
import Stories from "../stories/Stories";
import "./home.css"
import Posts from "../posts/Posts";
export default function Home(props){
    return (
        <div  className="home">
        <Stories userName = {props.userName} />
        <Posts darkMode ={props.darkMode}/>
        </div>
    )
}