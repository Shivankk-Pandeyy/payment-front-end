import { NavLink, useNavigate, useParams } from 'react-router-dom'
import './WebsiteComponent.css'
const Header = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  //console.log(id);
  const logout=()=>{
    navigate('/Login');
  }
return (
    <div className="header">
    <div className="name">
    <h2>Rhino Reps</h2>
    </div>
    <div className="link">
    <NavLink to={`/WelcomePage/${id}`}>Home</NavLink>
    <NavLink to={`/Plans/${id}`}>Plans</NavLink>
    <NavLink to={`/MyPlans/${id}`}>My Plans</NavLink>
    <NavLink to={`/MyCart/${id}`}>🛒Cart</NavLink>
    </div>
    <div className='signup'>
    <button onClick={logout}>SignOut→</button>
    </div>
    </div>
  )
}

export default Header
