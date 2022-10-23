import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {/* <li>Welcome, {user.name}</li> */} 
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
      <li><NavLink to="/birds/new">Add a Bird</NavLink></li>

      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/changePassword">Change Password</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {/* <NavNavLink to={'/'}><img src={Logo} alt="Logo" /></NavNavLink> */}
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}


export default NavBar
