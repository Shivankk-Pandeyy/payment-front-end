import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import About from "./Pages/About"
import WelcomePage from './Website/Homepage'
import MyCart from "./Website/MyCart"
import Plans from "./Website/Plans"
import MyPlans from "./Website/MyPlans"
import AdminPanel from "./Adminpanel/AdminPanel"
import MemberList from "./Adminpanel/MemberList"
import UploadPlans from "./Adminpanel/UploadPlans"
import UpdateAdmin from "./Adminpanel/UpdateAdmin"
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/WelcomePage/:id" element={<WelcomePage/>}></Route>
    <Route path="/MyCart/:id" element={<MyCart/>}></Route>
    <Route path="/Plans/:id" element={<Plans/>}></Route>
    <Route path="/MyPlans/:id" element={<MyPlans/>}></Route>
    <Route path="/AdminPanel/:id" element={<AdminPanel/>}></Route>
    <Route path="/AdminMemberList/:id" element={<MemberList/>}></Route>
    <Route path="/AdminUploadPanel/:id" element={<UploadPlans/>}></Route>
    <Route path="/AdminDetails/:id" element={<UpdateAdmin/>}></Route>
    </Routes>
  )
}

export default App
