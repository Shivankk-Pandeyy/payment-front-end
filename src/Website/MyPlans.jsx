/* eslint-disable no-unused-vars */
import Footer from "./Website Components/Footer"
import Header from "./Website Components/Header"
import './Web.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyPlans = () => {
  axios.defaults.withCredentials=true
  const notify = () => {
    toast.error("Plan Deleted")
}
  const {id}=useParams();
  const [myplans,setmyplans]=useState([]);
  const MyPlans=async()=>{
    try{
      const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/rhinoreps/GetPlans");
      //console.log(response.data)
      setmyplans(response.data);
    }
    catch(err){
      console.log(err);
    }
  }
  //TO OPEN PDF
  const OPENPDF=(pdfPath)=>{
    window.open("https://payment-back-end-atwu.vercel.app/files/"+pdfPath);
}
//DELETING PLAN
const DeleteMyPlan=async(e)=>{
  try{
    const response=await axios.delete("https://payment-back-end-atwu.vercel.app/api/rhinoreps/DeletePlan/"+e)
    notify();
  }
  catch(err){
    console.log(err);
  }
}
  useEffect(()=>{
    MyPlans();
  },[DeleteMyPlan])
  return (
    <>
    <Header/>
    <div className="plans">
    <h2>Purchased Plans</h2>
    <div className="plan-section">
    {
      myplans.map((val)=>{
        if(val.user_id===id){
          return(
            <>
    <div className="plan-card">
    <h2>{val.name_of_pdf}</h2>
    <h2>ENJOY THE PLAN</h2>
    <p>✔️Life-Time access</p>
    <p>✔️PDF Format</p>
    <p>✔️Proper sets with reps and rest duration</p>
    <button onClick={(e)=>OPENPDF(val.location_of_pdf)}>DOWNLOAD NOW</button>
    <button onClick={(e)=>DeleteMyPlan(val._id)}>DELETE PLAN</button>
    </div>
            </>
          )
        }
      })
    }
    </div>
    </div>
    <ToastContainer />
    <Footer/>
    </>
  )
}

export default MyPlans
