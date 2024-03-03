import Footer from "../Components/Footer";
import Header from "../Components/Header";  
import './Page.css'
import hp from './hp.png'
import hp1 from './HP1.png'
import { NavLink } from "react-router-dom";
import insta from './insta.png'
import fb from './facebook.png'
import snap from './snap.png'
import twitter from './twitter.png'
import contact from './contact.png'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
export default function Homepage() {
    useEffect(()=>{
        Aos.init();
    },[]);
return (
    <>
    <Header/>
    <div className="hp1">
    <div className="hp11">
    <img src={hp} alt="OUR LOGO" data-aos="zoom-in"></img>
    </div>
    <div className="hp11" data-aos="zoom-in">
    <h1>Team Rhino Reps Welcomes You</h1>
    <h2>Elevate Your Game Beyond the Ordinary Fitness Levels.</h2>
    <h2>More Than a Workout Plan,Transform with Unparallel Fitness Levels.</h2>
    <div className="hp-button">
    <Link to="#hp2"><button>Know More</button></Link>
    <Link to='#contact'><button>Contact Us</button></Link>
    <NavLink to='/Login'><button>Join Us</button></NavLink>
    </div>
    <h2>DESIGNED & DEVELOPED BY</h2>
    <h2>UI/UX DESIGN LABS</h2>
    </div>
    </div>
    <div className="hp2" id="hp2">
    <div className="hp22">
    <h2 data-aos="fade-up-right">At Rhino Reps we provide different workout plans.</h2>
    <h2 data-aos="fade-up-right">All the plans are PAID but at a very affordable Price.</h2>
    <h2 data-aos="fade-up-right">You can choose your favorite plan and order to unlock the plan.</h2>
    <h2 data-aos="fade-up-right">Once the payment has been Successfull the Plan gets unlocked and you can make full use of the plan.</h2>
    <h2 data-aos="fade-up-right">Accessed plans will be available for lifetime.</h2>
    <h2 data-aos="fade-up-right">Steps to proceed</h2>
    <table data-aos="fade-up-right">
    <tr data-aos="fade-up-right">
    <td>1</td>
    <td>LOGIN/SIGNUP</td>
    </tr>
    <tr data-aos="fade-up-right">
    <td>2</td>
    <td>CHOOSE PLAN</td>
    </tr>
    <tr data-aos="fade-up-right">
    <td>3</td>
    <td>MAKE PAYMENT</td>
    </tr>
    <tr data-aos="fade-up-right">
    <td>4</td>
    <td>ACCESS GRANTED</td>
    </tr>
    </table>
    </div>
    <div className="hp22">
    <img src={hp1} alt="OUR PLANS" data-aos="fade-up-right"></img>
    </div>
    </div>
    <div className="hp3" id="contact">
    <div className="hp33">
    <img src={contact} alt="OUR CONTACT CARD" data-aos="fade-up-right"></img>
    </div>
    <div className="hp33">
    <a href="tel:7389288618"><button data-aos="fade-up-right">CALL</button></a>
    <a href='mailto:pandeyshivank21@gmail.com'><button data-aos="fade-up-right">EMAIL</button></a>
    <button data-aos="fade-up-right">CONTACT CARD</button>
    <button data-aos="fade-up-right"><NavLink to="/Login">JOIN US</NavLink></button>
    <h2 data-aos="fade-up-right">Follow us on various social platforms.</h2>
    <div className="social">
    <img src={insta} alt="INSTAGRAM HANDLE" data-aos="fade-up-right"></img>
    <img src={fb} alt="FACEBOOK HANDLE" data-aos="fade-up-right"></img>
    <img src={snap} alt="SNAPCHAT HANDLE" data-aos="fade-up-right"></img>
    <img src={twitter} alt="TWIITER HANDLE" data-aos="fade-up-right"></img>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
