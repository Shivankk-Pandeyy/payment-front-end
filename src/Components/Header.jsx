import { NavLink } from 'react-router-dom'
import './Component.css'
const Header = () => {
return (
    <div className="header">
    <div className="name">
    <h2>Rhino Reps</h2>
    </div>
    <div className="link">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Login">Login</NavLink>
    </div>
    <div className='signup'>
    <NavLink to="/Signup">Signup →</NavLink>
    </div>
    </div>
  )
}

export default Header
