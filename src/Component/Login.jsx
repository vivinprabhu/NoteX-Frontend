import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useDispatch } from "react-redux"
import { login } from '../Component/Redux/Store'

import '../Assests/css/Signup.css'

axios.defaults.withCredentials = true

const Login = () => {

  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const { data: res } = await axios.post(`${backendUrl}api/auth/`, data);
      console.log(res.message);
      dispatch(login({ value: { username: data.email } }));
      localStorage.setItem("loggedIn", true);
      document.cookie = `token= ${res.data};`
      navigate("/noteX");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className='overall-login-container'>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Enter your credentials!</h1>
          <label>Email</label>
          <input type="email" placeholder='Enter your email' onChange={handleChange} name='email' value={data.email} />
          <label>Password</label>
          <input type="password" placeholder='Enter your password' onChange={handleChange} name='password' value={data.password} />
          <div className="display-error">
            {error}
          </div>
          <button type='submit'>Login</button>
          <h4 onClick={() => navigate('/register')}>Don't have an account? Click here</h4>
        </div>
      </form>

    </div>
  )
}

export default Login