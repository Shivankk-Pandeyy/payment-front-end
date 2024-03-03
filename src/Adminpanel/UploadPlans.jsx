/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import AdminFooter from "./AdminFooter"
import AdminHeader from "./AdminHeader"
import './Admin.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UploadPlans = () => {
    const notify = () => {
        toast.success("Plan Added"),{
            position: toast.POSITION.TOP_RIGHT,
        }
        
    }
    const notify1 = () => {
        toast.error("Plan Deleted"),{
            position: toast.POSITION.TOP_RIGHT,
        }
        
    }
    const navigate=useNavigate();
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [file,setFile]=useState("");
    const [pdflist,setPdfList]=useState([]);
    const getallpdf=async()=>{
        const response=await axios.get("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/GetPdfs")
        // console.log(response.data.pdfs)
        setPdfList(response.data.pdfs);
    }
    const submitpdf=async(e)=>{
        e.preventDefault();
        if(title===""|| price===""||file===""){
            return alert("ALL FIELDS ARE MANDATORY!")
        }
        const formData=new FormData();
        formData.append("title",title);
        formData.append("file",file);
        formData.append("price",price);
        console.log(file,title)
        try{
            const response=await axios.post("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/UploadPdf",formData);
            //console.log(response)
            setPrice("");
            setTitle("");
            notify();
        }
        catch(err){
            console.log(err);
        }
    }
    const deletePDF=async(pdfId)=>{
        try{
            const response=await axios.delete("https://payment-back-end-atwu.vercel.app/api/AdminRhinoReps/deletePdf/"+pdfId);
            //console.log(response)
            notify1();
        }
        catch(err){
            console.log(err);
        }
    }
    const OPENPDF=(pdfPath)=>{
        window.open("https://payment-back-end-atwu.vercel.app/files/"+pdfPath);
    }
    useEffect(()=>{
        getallpdf();
    },[deletePDF]);
return (
    <>
    <AdminHeader/>
    <div className="uploads">
    <div className="pdfupload">
    <h2>UPLOAD PDF</h2>
    <form onSubmit={submitpdf}>
    <label>ENTER TITTLE</label>
    <input type="text" placeholder="ENTER TITLE FOR PDF" autoComplete="off" onChange={(e)=>setTitle(e.target.value)} value={title}></input>
    <input type="number" placeholder="ENTER PRICE FOR PDF IN INR" autoComplete="off" onChange={(e)=>setPrice(e.target.value)} value={price}></input>
    <input type="file" accept="application/pdf" style={{color:"white",fontSize:"1.5rem"}} onChange={(e)=>setFile(e.target.files[0])}></input>
    <button type="submit">SUBMIT PDF</button>
    </form>
    </div>
    <div className="viewpdf">
    {
        pdflist.map((val)=>{
            return(
                <>
    <div className="pdfv">
    <h2>{val.name}</h2>
    <h2>₹{val.price}</h2>
    <button onClick={(e)=>OPENPDF(val.pdf)}>OPEN PDF</button>
    <button style={{backgroundColor:"red"}} onClick={(e)=>deletePDF(val._id)}>DELETE PDF</button>
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

export default UploadPlans
