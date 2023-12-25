import './App.css';
import React from "react";
import { Navigate, } from 'react-router-dom';
import Login from "./components/login/Login"
import Register from './components/register/Register';
import Home from './components/home/Home';

import { BrowserRouter,Route,Routes,Outlet } from 'react-router-dom';
import Navbar from './items/navbar/Navbar';
import Leftbar from './items/leftbar/Leftbar';
import Rightbar from './items/rightbar/Rightbar';
import Profile from './components/profile/Profile';

function App() {
  const [userData, setUserData] = React.useState({
    userName: JSON.parse(localStorage.getItem("userInfo")).userName || "",
    passWord: JSON.parse(localStorage.getItem("userInfo")).passWord || "",
    email: JSON.parse(localStorage.getItem("userInfo")).email || "",
    name: JSON.parse(localStorage.getItem("userInfo")).name || "",
    current: JSON.parse(localStorage.getItem("userInfo")).current || false,
  });

  React.useInsertionEffect(()=>{
    localStorage.setItem("dark", JSON.stringify(false));
  },[]);
  
  const[darkMode, setDarkmode] = React.useState(JSON.parse(localStorage.getItem("dark")));

  function toggleDarkMode(){
    var old = JSON.parse(localStorage.getItem("dark"));
    localStorage.setItem("dark", JSON.stringify(!old));
    setDarkmode(JSON.parse(localStorage.getItem("dark")));
  }

  function handleEvent(userName,passWord,email,name,current){
    setUserData({
      userName : userName,
      passWord : passWord,
      email : email,
      name: name,
      current:current
    })
  }


  React.useEffect(()=>{
      localStorage.setItem("userInfo",JSON.stringify(userData))
    },[userData])

  

  const Layout = () =>{
    return (
      <div>
        <Navbar userName ={userData.userName} darkMode={darkMode} toggleDark = {toggleDarkMode} />
        <div style ={{display:"flex"}}>
          <Leftbar userName = {userData.userName} darkMode={darkMode}/>
          <div style={{flex:6, backgroundColor: darkMode ?"#333" :"#f6f3f3"}}>
            <Outlet/>
          </div>
          
          <Rightbar darkMode={darkMode}/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!userData.current){
      return <Navigate to ="/" />
    }
    return children
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Login handleEvent ={handleEvent}/>}/>
      <Route path ="/register" element = {<Register handleEvent ={handleEvent} />}/>
      <Route path="/layout" element ={<ProtectedRoute><Layout style ={{backgroundColor:"black"}}/></ProtectedRoute> }>
        <Route index element ={<Home userName = {userData.userName} darkMode={darkMode}/>}/>
        <Route path ='profile' element ={<Profile darkMode={darkMode}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
