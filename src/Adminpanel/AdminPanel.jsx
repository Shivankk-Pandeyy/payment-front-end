import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import './Admin.css'
import HP from './HP.png'
const AdminPanel= () => {
return (
    <>
    <AdminHeader/>
    <div className="intro">
    <div className="intro-1">
    <img src={HP} alt="OUR LOGO"></img>
    </div>
    <div className="intro-2">
    <h2><span>RHINO REPS</span></h2>
    <h2>⚡ADMIN PANEL OF TEAM RHINO REPS⚡</h2>
    <p>At <span>Rhino Reps</span>,we are more than just a fitness provider,we are a community commited to helping people achive their health and wellness goals.</p>
    <h2>ADMIN POWER</h2>
    <table>
    <tbody>
    <tr>
    <td>1</td>
    <td>VIEW MEMBER LIST</td>
    </tr>
    <tr>
    <td>2</td>
    <td>UPLOAD PDFs</td>
    </tr>
    <tr>
    <td>3</td>
    <td>SET PRICES</td>
    </tr>
    <tr>
    <td>4</td>
    <td>SUSPEND/DELETE USER PROFILE</td>
    </tr>
    <tr>
    <td>5</td>
    <td>24x7 UPDATIONS POSSIBLE</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <AdminFooter/>
    </>
    
)
}
export default AdminPanel
