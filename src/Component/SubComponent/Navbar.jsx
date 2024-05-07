import { React } from 'react'

import axios from 'axios';

import { logout } from '../../Component/Redux/Store'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../../Assests/css/Navbar.css'

axios.defaults.withCredentials = true

const Navbar = () => {

  const username = useSelector( state => state.user.value.username );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    axios.get("http://localhost:3001/api/logout/deleteCookie" , {withCredentials:true})
    .then((res)=>{
      // console.log(res.data)
      localStorage.removeItem("loggedIn");
      navigate("/login")
    })
    .catch(error => {
      console.error('Logout error:', error);
    });
    dispatch(logout())
  }

  return (
      <div className="navbar">
        <ul>
            <li>{username ? username : "Guest"}</li>
            <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
  )
}

export default Navbar