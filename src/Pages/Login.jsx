import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import './Page.css'
import rrr from "./RRR.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
const Login = () => {
    const navigate=useNavigate();
    const [members,setMembers]=useState([]);
    const [user,setUser]=useState({
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
        if(user.password===""||user.email===""){
            alert("ALL FIELDS ARE MANDATORY!");
            return;
        }
        else{
            try{
                const response=await axios.post("https://payment-back-end-atwu.vercel.app/api/rhinoreps/LOGIN",user)
                //console.log(response.data.message)
                if(response.data.message==="LOGIN"){
                    members.map((val)=>{
                        if(val.email===user.email){
                            navigate(`/WelcomePage/${val._id}`)
                            return;
                        }
                    })  
                } 
                if(response.data.message==="ADMIN"){
                    members.map((val)=>{
                        if(val.email===user.email){
                            navigate(`/AdminPanel/${val._id}`)
                            return;
                        }
                    })
                    
                }
            }
            catch(err){
                if(err.response.data.message==="INVALID CREDENTIALS"){
                    return alert("INVALID CREDENTIALS!");
                }
                if(err.response.data.message==="USER NOT FOUND"){
                    return alert("USER NOT FOUND!");
                }
            }
        }
    }
    const FP=()=>{
        alert("WILL BE ENABLED SOON!");
    }
    const getAllUsers=async()=>{
        try{
            const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/rhinoreps/AllUsers");
            //console.log(response.data);
            setMembers(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        Aos.init();
        getAllUsers()
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
    <h2 data-aos="zoom-in">USER LOGIN</h2>
    <form onSubmit={handleSubmit} data-aos="zoom-in">
    <label>EMAIL</label>
    <input type="text" placeholder="Enter Email" autoComplete="off" name='email' value={user.email} onChange={handleUser}></input>
    <label>PASSWORD</label>
    <input type="password" placeholder="Enter Password" autoComplete="off" name='password' value={user.password} onChange={handleUser}></input>
    <div className="login-box">
    <NavLink onClick={FP}>Forgot Password?</NavLink>
    <NavLink to="/Signup">Signup?</NavLink>
    </div>
    <button type="submit">LOGIN</button>
    </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default Login