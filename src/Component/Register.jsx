import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Assests/css/Signup.css'

const Register = () => {

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
      const response = await axios.post(`${backendUrl}api/users`, data);
      setError(response.data.message);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Email already exists!");
      } else {
        setError("Password was not strong! (Ensure one caps, one small, one special character and one number with minimum length of 8 characters)");
      }
    }
  };

  return (
    <div className='overall-login-container'>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Create your account</h1>
          <label>Email</label>
          <input type="email" placeholder='you@gmail.com' onChange={handleChange} name='email' value={data.email} />
          <label>Password</label>
          <input type="password" placeholder='Create your password' onChange={handleChange} name='password' value={data.password} />
          <div className="display-error">
            {error}
          </div>
          <button type='submit'>Join</button>
          <h4 onClick={() => navigate('/login')}>Already having an account, Click here!</h4>
        </div>
      </form>

    </div>
  )
}

export default Register