import { NavLink, useNavigate, useParams } from 'react-router-dom'
import './AdminComponent.css'
const AdminHeader = () => {
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
    <NavLink to={`/AdminPanel/${id}`} title='HOMEPAGE'>🌐</NavLink>
    <NavLink to={`/AdminMemberList/${id}`} title='MEMBERS LIST'>👥</NavLink>
    <NavLink to={`/AdminUploadPanel/${id}`} title='UPLOAD PLANS'>📋</NavLink>
    <NavLink to={`/AdminDetails/${id}`} title='ADMIN INO'>🔐</NavLink>
    </div>
    <div className='signup'>
    <button onClick={logout}>SignOut→</button>
    </div>
    </div>
  )
}

export default AdminHeader
