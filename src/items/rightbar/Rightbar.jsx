import React from "react";
import "./rightbar.css"
export default function Rightbar(props){
    const [member,setMember] =React.useState({
        follow :[false,false],
        dismiss:[false,false]
    })

    function isFollowing(i){
        const copy = {...member};
        copy.follow[i] = true;
        setMember(copy);
    }

    function dismissed(i){
        const copy = {...member};
        copy.dismiss[i] = true;
        setMember(copy);
    }
    return(
       <div className={`rightBar ${props.darkMode ? "darkbg": ""}`}>
        <div className="container">
            {(!member.dismiss[0] || !member.dismiss[1]) &&
            <div className={`rightb-item ${props.darkMode ? "dark": ""}`}>
                <span>Suggestions For You</span>
                { !member.dismiss[0] &&<div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span>{member.follow[0] ? " You started following Jane Doe" :"Jane Doe"} </span>
                    </div>
                    {member.follow[0] &&<span>just now</span>}
                    {!member.follow[0] && !member.dismiss[0] && <div className="buttons">
                        <button onClick={() => isFollowing(0)}>Follow</button>
                        <button onClick={() => dismissed(0)}>Dismiss</button>
                    </div>}
                </div>}
                {!member.dismiss[1] && <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span>{member.follow[1] ? " You started following Jane Doe" :"Jane Doe"} </span>
                    </div>
                    {member.follow[1] &&<span>just now</span>}
                    {!member.follow[1] && !member.dismiss[1] && <div className="buttons">
                        <button onClick={() => isFollowing(1)}>Follow</button>
                        <button onClick={() => dismissed(1)}>Dismiss</button>
                    </div>}
                </div>}
            </div>}
            <div className={`rightb-item ${props.darkMode ? "dark": ""}`}>
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                            <span>Jane Doe </span>
                             changed their profile picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                            <span>Jane Doe </span>
                             liked a post
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                            <span>Jane Doe </span>
                             liked a comment
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                            <span>Jane Doe </span>
                             posted
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className={`rightb-item ${props.darkMode ? "dark": ""}`}>
                <span>Online Friends</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online"></div>
                        <span>Jane Doe </span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online"></div>
                        <span>Jane Doe </span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online"></div>
                        <span>Jane Doe </span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online"></div>
                        <span>Jane Doe </span>
                    </div>
                </div>
            </div>

        </div>
       </div>
    )
}