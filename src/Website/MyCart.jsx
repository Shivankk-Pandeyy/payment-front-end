/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Footer from "./Website Components/Footer"
import Header from "./Website Components/Header"
import fav from "./FAVICON.png"
import axios from "axios";
import { useEffect, useState } from "react";
import logo from './FAVICON.png'
import RP from './RP.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
const MyCart = () => {
  var TotalAmount=0
  const notify = () => {
    toast.error("Item Removed")
}
  const {id}=useParams();
  const [cartList,setCartList]=useState([]);
  const getCartList=async()=>{
    try{
      const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/rhinoreps/CartList");
      setCartList(response.data);
    }
    catch(err){
      console.log(err);
    }
  }
  const removeCart=async(e)=>{
    try{
      const response=await axios.delete("https://payment-back-end-atwu.vercel.app/api/rhinoreps/RemoveCart/"+e);
      notify()
    }
    catch(err){
      console.log(err);
    }
    
  }
  const removeCart1=async(e)=>{
    try{
      const response=await axios.delete("https://payment-back-end-atwu.vercel.app/api/rhinoreps/RemoveCart/"+e);
    }
    catch(err){
      console.log(err);
    }
    
  }
  const notifyPayment=()=>{
    toast.error("No orders yet")
  }
  const BOUGHT=async()=>{
    cartList.map((val)=>{
      if(val.user_id===id){
        const response=axios.post("https://payment-back-end-atwu.vercel.app/api/rhinoreps/ItemsPurchased",{user_id:val.user_id,name_of_pdf:val.name_of_pdf,price_of_pdf:val.price_of_pdf,location_of_pdf:val.location_of_pdf,pdf_id:val.pdf_id});
        removeCart1(val._id);
      }
    })
  }
  const paymentHandler=async(e)=>{
    try{
      if(TotalAmount===0){
        return notifyPayment();
      }
      BOUGHT()
      const response=await axios.post("https://payment-back-end-atwu.vercel.app/api/rhinoreps/Order",{amount:TotalAmount});
      console.log(response);
      const order=await response;
      console.log(order)
      var options = {
        key: "rzp_test_XRLNRq09Z6e5f9", // Enter the Key ID generated from the Dashboard
        amount:TotalAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency:"INR",
        name: "RHINO REPS", //your business name
        description: "RHINO REPS CHECKOUT PAGE",
        image:{logo},
        //order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          const body = {
            ...response,
          };
          const validateRes = await fetch(
            "http://localhost:1818/api/rhinoreps/ValidateOrder",
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await validateRes.json();
          console.log(jsonRes);
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: "RHINO REPS", //your customer's name
          email: "pandeyshivank21@gmail.com",
          contact: "7389288618", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "RHINO REPS OFFICE",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getCartList();
  },[removeCart]);
  return (
    <>
    <Header/>
    <div className="cart">
    <div className="order-list">
    {
      cartList.map((val)=>{
        if(val.user_id===id){
          TotalAmount=TotalAmount+(+val.price_of_pdf);
          return(
            <>
    <div className="orders">
    <div className="o1">
    <h2>{val.name_of_pdf}</h2>
    <h2>Price: ₹{val.price_of_pdf}</h2>
    <p>✅Life-Time access</p>
    <button onClick={(e)=>removeCart(val._id)}>Remove Cart</button>
    </div>
    <div className="o2">
    <img src={fav} alt="OUR LOGO"></img>
    </div>
    </div>
            </>
          )
        }
      })
    }
    </div>
    <div className="checkout">
    <div className="coupon">
    <h2>Payment Gateway Partners</h2>
    <img src={RP} alt="RAZORPAY PAYMENT"></img>
    </div>
    <div className="check">
    <h2>SUB-TOTAL: ₹{TotalAmount}</h2>
    <h2>TOTAL: ₹{TotalAmount}</h2>
    <button onClick={paymentHandler}>Checkout</button>
    <h2>IMPORTANT INFORMATION</h2>
    <p>* No REFUND POLICIES</p>
    <p>* NO EXCHANGE ON PLANS</p>
    <p>* NO EMIs/INSTALLMENTS</p>
    <h2></h2>
    </div>
    </div>
    </div>
    <ToastContainer />
    <Footer/>
    
    </>
  )
}

export default MyCart
