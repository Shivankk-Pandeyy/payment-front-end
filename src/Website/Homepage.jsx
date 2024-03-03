import Header from "./Website Components/Header"
import Footer from "./Website Components/Footer"
import './Web.css'
import HP from './HP.png'
const Homepage = () => {
return (
    <>
    <Header/>
    <div className="intro">
    <div className="intro-1">
    <img src={HP} alt="OUR LOGO"></img>
    </div>
    <div className="intro-2">
    <h2>Welcome to <span>Rhino Reps</span></h2>
    <h2>⚡Unleash Your Potential,Transform Your Life⚡</h2>
    <p>At <span>Rhino Reps</span>,we are more than just a fitness provider,we are a community commited to helping people achive their health and wellness goals.</p>
    <h2>WHY CHOOSE US?</h2>
    <table>
    <tbody>
    <tr>
    <td>1</td>
    <td>Variety of Plans</td>
    </tr>
    <tr>
    <td>2</td>
    <td>Downloadable PFDs</td>
    </tr>
    <tr>
    <td>3</td>
    <td>Affordable Prices</td>
    </tr>
    <tr>
    <td>4</td>
    <td>Easy Payments</td>
    </tr>
    <tr>
    <td>5</td>
    <td>24x7 Customer Service</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <Footer/>
    </>
    
)
}
export default Homepage
