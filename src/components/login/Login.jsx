import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login(props){
    const [disable,setDisable] = React.useState(true);
    const [err,setErr] = React.useState("")
    const [formData,setFormData] = React.useState({
        userName : "",
        passWord : ""
    })
    const navigate = useNavigate();
    function handleChange(event){
        const {name,value} = event.target;
        setFormData(prevState => {
           return {...prevState,
            [name] : value
            }
        })
        if(formData.userName !== "" && formData.passWord !==""){
            setDisable(false)
        }
        if(formData.userName === "" || formData.passWord ===""){
            setDisable(true)
        }
    }

    const localData = JSON.parse(localStorage.getItem("userInfo"))

    function handleSubmit(event){
        event.preventDefault();
        if(formData.userName===localData.userName && formData.passWord === localData.passWord){
            setErr("")
         navigate("/layout")
        }
        else{
         setErr("*Credentials didn't match. Try again")
        }
    }
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                <p>Join the relam, where every connection creates a story. Welcome to a blinkr world of 
                    shared moments and endless possibilities – your social journey begins here!</p>
                <span>Don't have an account?</span>
                <Link to ="/register"><button>Register</button></Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form  onSubmit ={handleSubmit} >
                        <input type="text" placeholder="Username" name ="userName" value={formData.userName} onChange={handleChange}/>
                        <input type="password" placeholder="Password" name ="passWord" value ={formData.passWord} onChange={handleChange} />
                        <p>{err}</p>
                        <button  disabled={disable}>Login</button>
                        <div className="media">
                            <span>Don't have an account?</span>
                        <Link to ="/register"><button>Register</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}