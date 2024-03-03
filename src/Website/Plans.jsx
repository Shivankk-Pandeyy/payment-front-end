/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Footer from "./Website Components/Footer"
import Header from "./Website Components/Header"
import { useEffect, useState } from "react";
import axios from "axios";
import './Web.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
const Plans = () => {
    axios.defaults.withCredentials=true
    const [T,setT]=useState(false);
    var BULL=false;
    const [purchase,setPurchase]=useState([]);
    const MyPlans=async()=>{
        try{
          const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/rhinoreps/GetPlans");
          setPurchase(response.data);
          //console.log(response.data)
        }
        catch(err){
          console.log(err);
        }
      }
    const {id}=useParams()
    const notify = () => {
        toast.success("Added to cart");
    }//FOR ADDED TO CART
    const notify1 = () => {
        toast.warning("Already added in cart")
    }//FOR ALREADY ADDED TO CART
    const notify2 = () => {
        toast.warning("Already bought")
    }//FOR ALREADY ADDED TO CART
    const [pdflist,setPdfList]=useState([]);
    const getallpdf=async()=>{
        const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/GetPdfs")
        // console.log(response.data.pdfs)
        setPdfList(response.data.pdfs);
    }
    //add to cart
    const addToCart=async(user_id,name_of_pdf,price_of_pdf,location_of_pdf,pdf_id)=>{
        //console.log(user_id,name_of_pdf,price_of_pdf,location_of_pdf,pdf_id);
        console.log(T)
        try{
            purchase.map((val)=>{
                if(val.pdf_id===pdf_id && val.user_id===user_id){
                    // notify2();
                    BULL=true;
                }
            })
            if(BULL){
                BULL=false
                return notify2()
            }
            const response=await axios.post("https://payment-back-end-atwu.vercel.app/api/rhinoreps/AddToCart",{user_id:user_id,name_of_pdf:name_of_pdf,price_of_pdf:price_of_pdf,location_of_pdf:location_of_pdf,pdf_id:pdf_id});
                    return notify()
            }
        catch(err){
                    //console.log(err.response.data.message)
                    return notify1()

        }
    }
    useEffect(()=>{
        getallpdf();
        MyPlans();
    },[setT])
return (
    <>
    <Header/>
    <div className="plans">
    <h2>Our Plans</h2>
    <div className="plan-section">
    {
        pdflist.map((val)=>{
            return(
                <>
    <div className="plan-card">
    <h2>{val.name}</h2>
    <h2>₹{val.price} ONLY</h2>
    <p>✔️Life-Time access</p>
    <p>✔️PDF format available</p>
    <p>✔️Proper sets with reps and rest duration</p>
    <button onClick={(UI,NOP,POP,LOP,PI)=>{addToCart(id,val.name,val.price,val.pdf,val._id)}}>Add to Cart</button>
    </div>
                </>
            )
        })
    }
    </div>
    </div>
    <ToastContainer />
    <Footer/>
    </>
)
}
export default Plans
