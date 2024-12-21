import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram_icon.png'
import twitter from '../../assets/twitter_icon.png'
import yt from '../../assets/youtube_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="icon">
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={yt} alt="" />
      </div>
      <ul>
      <li>FAQ</li>
<li>Help Center</li>
<li>Account</li>
<li>Media Center</li>
<li>Investor Relations</li>
<li>Jobs</li>
<li>Ways to Watch</li>
<li>Terms of Use</li>
<li>Privacy</li>
<li>Cookie Preferences</li>
<li>Corporate Information</li>
<li>Contact Us</li>
<li>Speed Test</li>
<li>Legal Notices</li>
<li>Only on Netflix</li>
      </ul>
      <p id='copyright'>&copy; 2024 Rahul Ambhore. All rights reserved.</p>

    </div>
  )
}

export default Footer