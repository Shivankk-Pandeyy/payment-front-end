import { useEffect, useState } from "react";
import AdminFooter from "./AdminFooter"
import AdminHeader from "./AdminHeader"
import axios from "axios"
import fav from './FAVICON.png'
import { useParams } from "react-router-dom";
const UpdateAdmin = () => {
  const {id}=useParams()
  const [admin,setAdmin]=useState({
    name:"",
    email:"",
  })
  const [members,setMembers]=useState([]);
  const getAllUsers=async()=>{
    const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/getAllMembers");
    setMembers(response.data);
    members.map((val)=>{
      if(val._id===id){
        setAdmin({
          name:val.name,
          email:val.email
        })
      }
    })
    //console.log(response.data);
  }
  const setAdminDetails=(e)=>{
    const {name,value}=e.target;
    setAdmin({
      ...admin,
      [name]:value
    })
  }
  useEffect(()=>{
    getAllUsers()
  },[]);
  return (
    <>
    <AdminHeader/>
    <div className="admin-info">
    <div className="admin-information">
    {
      members.map((val)=>{
        if(val._id===id){
          return(
            <>
            <h2>ADMIN INFORMATION</h2>
            <h2>NAME</h2>
            <span>{val.name}</span>
            <h2>EMAIL</h2>
            <span>{val.email}</span>
            <img src={fav} alt="OUR LOGO"></img>
            </>
          )
        }
      })
    }
    </div>
    <div className="admin-information">
            <h2>UPDATE ADMIN INFORMATION</h2>
            <h2>NAME</h2>
            <input type="text" name="name" onChange={setAdminDetails} autoComplete="off" placeholder="ENTER NEW ADMIN NAME"></input>
            <h2>EMAIL</h2>
            <input type="text" name="email" onChange={setAdminDetails} autoComplete="off" placeholder="ENTER NEW ADMIN EMAIL"></input>
            <button>UPDATE</button>
            <img src={fav} alt="OUR LOGO"></img>

    </div>
    </div>
    <AdminFooter/>
    </>
  )
}

export default UpdateAdmin
