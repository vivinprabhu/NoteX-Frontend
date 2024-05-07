import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../Assests/css/Landing.css'

import note from '../Assests/images/landingNote.png'
import share from '../Assests/images/landingNote2.png'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <div className="landing-page">

      <div className="section section-1">
        <div className="landing-1-img" data-aos="fade-down">
          <img src={note} alt="note" />
        </div>

        <div className="landing-1-txt" data-aos="fade-up">
          <h1>NoteX</h1>
          <h3>Note everything</h3>
          <button onClick={()=>navigate("/login")}>Get started for free!</button>
        </div>
      </div>

      <div className="section section-2">
        <h2 data-aos="zoom-out">How secure your informations are?</h2>
        <div className="section-2-boxes-container">
          <div className="section-2-box"  data-aos="fade-up">
            <h3>Search Functionality</h3>
            <p>Utilize NoteX's robust search feature to effortlessly locate specific old notes, even among a vast number of entries, enhancing productivity and organization. Whether you're searching for a recent idea or an older note, our powerful search functionality ensures you can quickly find what you need, allowing you to stay focused and efficient.</p>
          </div>
          <div className="section-2-box" data-aos="fade-up">
            <h3>Seamless Cloud Integration</h3>
            <p>NoteX seamlessly integrates with major cloud platforms, securely storing notes in the cloud and enabling access from any device, anytime. This ensures uninterrupted workflow, allowing users to seamlessly transition between devices while maintaining access to their notes at all times. Whether you're working on your computer, tablet, or smartphone, NoteX ensures your notes are always at your fingertips, enhancing productivity and convenience for users on the go.</p>
          </div>
          <div className="section-2-box" data-aos="fade-up">
            <h3>Privacy and Security</h3>
            <p>At NoteX, safeguarding user privacy is our top priority. By implementing httpOnly cookies, we fortify our platform against XSS attacks, ensuring that all user data remains safe and confidential. Our stringent security measures guarantee that your personal information is protected at all times, providing you with peace of mind as you capture and store your notes.</p>
          </div>
          <div className="section-2-box" data-aos="fade-up">
            <h3>Unlimted & also Free</h3>
            <p>With NoteX, enjoy unlimited note-taking freedom. Take as many notes as you need without any limitations or costs, empowering users to capture thoughts, ideas, and inspirations without constraints. Whether you're jotting down quick reminders or drafting detailed plans, NoteX provides the flexibility and freedom you need to organize your thoughts and unleash your creativity.</p>
          </div>
        </div>
      </div>

      <div className="section section-3"  data-aos="zoom-in">
        <h1>OUR PROMISE</h1>
        <h4 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">Experience the seamless integration of NoteX with cloud services, its powerful search feature, and the freedom of unlimited note-taking, ensuring productivity and privacy for all users.</h4>
      </div>

      <div className="section section-4" data-aos="fade-up" data-aos-duration="3000">
        <div className="landing-4-img">
        <img src={share} alt="share" />
        </div>
        
          <div className="landing-4-txt">
          <h1>SHARE YOUR NOTES</h1>
          <p>NoteX enables users to seamlessly share their notes, fostering collaboration and communication via email. With NoteX, sharing notes is simple and secure, empowering users to enhance productivity and streamline collaboration efforts."</p>
        </div>
      </div>
    </div>
  )
}

export default Landing
