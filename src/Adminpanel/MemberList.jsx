/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import AdminFooter from "./AdminFooter"
import AdminHeader from "./AdminHeader"
import './Admin.css'
import HP from './HP.png';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MemberList = () => {
  axios.defaults.withCredentials=true
  const notify = () => {
    toast.error("User Deleted")
}
  const {id}=useParams()
  const [members,setMembers]=useState([]);
  const getAllUsers=async()=>{
    const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/getAllMembers");
    setMembers(response.data);
    //console.log(response.data);
  }
  const handleDelete=async(memberId)=>{
    try{
      const response=await axios.delete("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/DeleteUser/"+memberId);
      //console.log(response)
      notify();
    }
    catch(err){
      //console.log(err)
    }
  }
  useEffect(()=>{
    getAllUsers()
  },[handleDelete]);
  return (
    <>
    <AdminHeader/>
    <div className="member-list">
    <h2>MEMBERS LIST</h2>
    <div className="plan-section">
    {
      members.map((val)=>{
        if(val._id===id){
          return;
        }
      return(
        <>
    <div className="plan-card">
    <h2>NAME:{val.name}</h2>
    <h2>EMAIL:{val.email}</h2>
    <img src={HP}></img>
    <button style={{backgroundColor:"#d90429"}} onClick={(e)=>{handleDelete(val._id)}}>DELETE USER</button>
    </div>
        </>
      )
      })
    }
    </div>
    </div>
    <ToastContainer />
    <AdminFooter/>
    </>
  )
}

export default MemberList
