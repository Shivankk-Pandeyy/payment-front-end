import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import rrr from "./RRR.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
const Signup = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
    });
    const handleUser=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value,
        });
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(user.name==""||user.password===""||user.email===""){
            alert("ALL FIELDS ARE MANDATORY!");
            return;
        }
        else{
            try{
                // eslint-disable-next-line no-unused-vars
                const response=await axios.post("https://payment-back-end-atwu.vercel.app/api/rhinoreps/Register",user)
                navigate('/Login')
            }
            catch(err){
                //console.log(err.response.data.message);
                if(err.response.data.message==="EMAIL"){
                    alert("EMAIL ALREADY EXISTS!");
                }
            }
        }
    }
    useEffect(()=>{
        Aos.init();
    },[]);
return (
    <>
    <Header/>
    <div className="login">
    <div className="login-frame">
    <div className="login-photo">
    <img src={rrr} alt="OUR LOGO" data-aos="zoom-in"></img>
    </div>
    <div className="login-form">
    <h2 data-aos="zoom-in">USER SIGNUP</h2>
    <form onSubmit={handleSubmit} data-aos="zoom-in">
    <label>NAME</label>
    <input type="text" placeholder="Enter Name" autoComplete="off" name='name' value={user.name} onChange={handleUser}></input>
    <label>EMAIL</label>
    <input type="text" placeholder="Enter Email" autoComplete="off" name='email' value={user.email} onChange={handleUser}></input>
    <label>PASSWORD</label>
    <input type="password" placeholder="Enter Password" autoComplete="off" name='password' value={user.password} onChange={handleUser}></input>
    <div className="login-box">
    <NavLink to="/Login">Already an User?</NavLink>
    </div>
    <button type="submit">SIGNUP</button>
    </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default Signup
