import React from 'react';
import "./comment.css"

export default function Comment() {
    localStorage.setItem("comments",JSON.stringify([
        {
            id:1,
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            name:"Jane Doe",
            userId:1,
            profilePic:"https://source.unsplash.com/600x900/?teenage-man",
            time :"1 hour"
        },
        {
            id:2,
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            name:"Jane Doe",
            userId:2,
            profilePic:"https://source.unsplash.com/600x900/?teenage-woman",
            time :"1 hour"
        }
    ]));

    const [userComment,setUserComment] = React.useState("");
    function handleChange(event){
        setUserComment(event.target.value);
    }
    var oldComments = JSON.parse(localStorage.getItem("comments"));
    function handleSubmit(event){
        event.preventDefault();
        var newId = oldComments.length;
        oldComments.push({
            id : newId +1,
            desc: userComment,
            name: "Shankar",
            userId:newId+1,
            profilePic:"https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
            time:"just now"
        });
        
        localStorage.setItem("comments",JSON.stringify(oldComments));
        console.log(JSON.parse(localStorage.getItem("comments")));
        setUserComment("")
    }

  return (
    <div className="comments">
        <form className="write" onSubmit={handleSubmit}>
            <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <input type="text" placeholder='write a comment' value ={userComment} onChange={handleChange} />
            <button>Post</button>
        </form>
        {JSON.parse(localStorage.getItem("comments")).map((comment)=>(
            <div key ={comment.id} className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>{comment.time} ago</span>
            </div>
        ))}
    </div>
  )
}
