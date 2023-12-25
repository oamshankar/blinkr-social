import React from 'react';
import "./Stories.css";

export default function Stories(props) {
    const dummyArray = [
      {
        id: 1,
        name: "Jhon Doe",
        img: "https://source.unsplash.com/600x900/?nature",
      },
      {
        id: 2,
        name: "Jhon Doe",
        img: "https://source.unsplash.com/600x900/?travel",
      },
      {
        id: 3,
        name: "Jhon Doe",
        img: "https://source.unsplash.com/600x900/?cat",
      }
    ];
  return (
    <div className='stories'>
      <div className='story'>
            <img src ="https://source.unsplash.com/600x900/?man" alt =""/>
            <span>{props.userName}</span>
            <button>+</button>
      </div>
      {dummyArray.map(story=>(
        <div key ={story.id} className='story'>
            <img src ={story.img} alt =""/>
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
