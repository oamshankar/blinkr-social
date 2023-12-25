import React from 'react';
import Post from '../post/Post';
import "./posts.css";

export default function Posts(props) {

  
  
  const postsArray = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      img: "https://source.unsplash.com/900x600/?group-people",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?woman",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      img: "https://source.unsplash.com/900x600/?nature-people",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?teenager",
    },
    {
      id: 3,
      name: "John Doe",
      userId: 3,
      img: "https://source.unsplash.com/900x600/?people",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?teenage",
    },
    {
      id: 4,
      name: "John Doe",
      userId: 4,
      img: "https://source.unsplash.com/900x600/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?teenager-car",
    },
    {
      id: 5,
      name: "John Doe",
      userId: 5,
      img: "https://source.unsplash.com/900x600/?zoo-human",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?forest",
    },
    {
      id: 6,
      name: "John Doe",
      userId: 6,
      img: "https://source.unsplash.com/900x600/?sea-human",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?beach",
    },{
      id: 7,
      name: "John Doe",
      userId: 7,
      img: "https://source.unsplash.com/900x600/?space-people",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?astronaut",
    },
    {
      id: 8,
      name: "John Doe",
      userId: 8,
      img: "https://source.unsplash.com/900x600/?sport-people",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?running",
    },
    {
      id: 9,
      name: "Cristiano Ronaldo",
      userId: 9,
      img: "https://source.unsplash.com/900x600/?Cristiano",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?cristiano-ronaldo",
    },
    {
      id: 10,
      name: "Kylie Jener",
      userId: 10,
      img: "https://source.unsplash.com/900x600/?Kylie-Jener",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      profilePic: "https://source.unsplash.com/600x900/?Kylie-profile",
    }
  ];

  

 
  
  
   
  return (
    <div className='posts'>
    {postsArray.map(post =>(
    <Post post={post} key ={post.id} darkMode ={props.darkMode}/>
    ))}
    </div>
  );
}
