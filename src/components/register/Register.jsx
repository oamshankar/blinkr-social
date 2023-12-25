import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import {Link} from "react-router-dom";
export default function Register(props){
    const [disable,setDisable] = React.useState(true);
    const [formData,setFormData] = React.useState({
        userName : "",
        passWord : "",
        email : "",
        name:"",
        current : false
    })
    const navigate = useNavigate();
    function handleChange(event){
        const {name,value} = event.target;
        setFormData(prevState => {
           return {...prevState,
            [name] : value
            }
        })
        if(formData.userName !== "" && formData.passWord !=="" && formData.email !=="" && formData.name !==""){
            setFormData(prevState => {
                return {...prevState,
                current: true
            }
            })
            setDisable(false)
        }
        if(formData.userName === "" || formData.passWord ==="" || formData.email ==="" || formData.name ===""){
            setDisable(true)
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        navigate("/layout")
        props.handleEvent(formData.userName,formData.passWord,formData.email,formData.name,formData.current)
    }
    return(
        <div className="register">
            <div className="recard">
                <div className="releft">
                    <h1>blinkr</h1>
                <p>Join the relam, where every connection creates a story. Welcome to a blinkr world of 
                    shared moments and endless possibilities – your social journey begins here!</p>
                <span>Do you have an account?</span>
                <Link to ="/"><button>Login</button></Link>
                </div>
                <div className="reright">
                    <h1>Register</h1>
                    <form onSubmit ={handleSubmit}>
                        <input type="text" placeholder="Username" name ="userName" value={formData.userName} onChange={handleChange} />
                        <input type="email" placeholder="E-mail" name ="email" value ={formData.email} onChange={handleChange} />
                        <input type="password" placeholder="Password" name ="passWord" value ={formData.passWord} onChange={handleChange} />
                        <input type="text" placeholder="Name" name ="name" value ={formData.name} onChange={handleChange} />
                        <button  disabled={disable}>Register</button>
                        <div className="remedia">
                             <span>Do you have an account?</span>
                             <Link to ="/"><button>Login</button></Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}