import React from 'react';
import "./Post.css";
import Comment from '../comments/Comment';
import { Link } from 'react-router-dom';
import { MdMoreHoriz } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
  
export default function Post({post,darkMode}) {
    const [liked,setLiked] = React.useState(false);
    const [comment,setComment] = React.useState(false);
    const [likes,setLikes] = React.useState(500)
    function toggleLike(){
        setLiked(prevState => !prevState)
        if(!liked){
            setLikes(prevLikes => prevLikes + 1)
        }
        else{
            setLikes(prevLikes => prevLikes - 1)
        }
    }
  return (
    <div className={`post ${darkMode ? "dark": ""}`}>
        <div className='container'>
            <div className='user'>
                <div className='userInfo'>
                    <img src={post.profilePic} alt =""/>
                    <div className='details'>
                        <Link to ="/layout/profile" style ={{textDecoration:"none",color:"inherit"}}>
                            <span className='name'>{post.name}</span>
                            
                        </Link>
                        <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MdMoreHoriz/>
            </div>
            <div className='content'>
                <p>{post.desc}</p>
                <img src ={post.img} alt =""/>
            </div>
            <div className='info'>
                <div className="item">
                    {liked ?<FcLike onClick={toggleLike}/> : <FaRegHeart onClick={toggleLike}/>}
                    {likes} likes
                </div>
                <div className="item">
                    <FaRegComment onClick ={()=> setComment(prevState => !prevState)}/>
                     12 comments
                </div>
                <div className="item">
                    <FaRegShareSquare/>
                    Share
                </div>
            </div>
            {comment && <Comment/>}
        </div>
    </div>
  )
}
