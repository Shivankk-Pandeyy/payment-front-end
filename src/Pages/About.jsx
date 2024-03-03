import { useEffect } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import aboutvideo from "./abt.png"
import './Page.css'
import Aos from "aos"
import 'aos/dist/aos.css'
const About = () => {
    useEffect(()=>{
        Aos.init();
    },[]);
return (
    <>
    <Header/>
    <div className="about">
    <div className="about-1">
    <h2 data-aos="zoom-in">We are Team Rhino Reps</h2>
    <h2 data-aos="zoom-in">Not your average Workout Plans</h2>
    <div className="about-11">
    <div className="about-111"> 
    <img src={aboutvideo} alt="OUR INTRO" data-aos="zoom-in"></img>
    </div>
    <div className="about-111"> 
    <h2 data-aos="zoom-in">Our Story</h2>
    <p data-aos="zoom-in">At Team Rhino Reps, we believe that fitness and well being are the conerstones of a vibrant life.Established In 2024,we began our journey as self buissness dedicated to Providing Exceptional workout schedules and guidance at affordable prices.But,we dreamed bigger than just being an ordinary fitness knowledge provider.</p>
    <h2 data-aos="zoom-in">We Inspire to Lead the Industry</h2>
    <p data-aos="zoom-in">Join us in our mission to improve lives through fitness and wellness,beacause at TEAM Rhino Reps,your health is our passion</p>
    </div>
    </div>
    </div>
    <div className="about-2">
    <h2 data-aos="fade-up-right">Our Values</h2>
    <p data-aos="fade-up-right">We live and breathe our six core values and six brand promises — they serve as the backbone Of our operations and speak of our commitment to improving the lives of our customers, supporting our eeam, championing industry standards, and driving our business with integrity and passion.</p>
    <div className="about-22">
    <div className="about-222" data-aos="fade-up-right">
    <h2>People Centric</h2>
    <p>Prioritising the happiness and well being of our team members,customers and stakeholders before all else.</p>
    </div>
    <div className="about-222" data-aos="fade-up-right">
    <h2>Skillfull</h2>
    <p>Combining Skill actions with agile thinking to approach challenges,fostering,resilience through creative and problem solving.</p>
    </div>
    <div className="about-222" data-aos="fade-up-right">
    <h2>Continous Improvement</h2>
    <p>Constantly seeking new ways to grow, learn, and innovate — embracing and leading change as a catalyst for progress.</p>
    </div>
    </div>
    <div className="about-22">
    <div className="about-222" data-aos="fade-up-right">
    <h2>Collaboration</h2>
    <p>Working together with effective communication, mutual respect and individual ownership to achieve shared goals and collective accountability.</p>
    </div>
    <div className="about-222" data-aos="fade-up-right">
    <h2>Empathy</h2>
    <p>Demonstrating kindness,compassion and understanding towards others to cultivate deeper relationships and create a positive impact.</p>
    </div>
    <div className="about-222" data-aos="fade-up-right">
    <h2>Inclusivity</h2>
    <p>Cultivating a culture that welcomes differences, celebrates unique perspectives,and provides a respectful and nurturing environment.</p>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default About
