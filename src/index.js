import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './heroimage.jpg';
import {FaGithub, FaEnvelope, FaInstagram} from "react-icons/fa";

function Webpage () {
  return <div>
    <div>
    <header class="header">
      Behind the Code
    </header>
  </div>

  {/*hero image*/}
  <div class="hero">
    <img class="hero" src={logo} alt="hero"/>
  </div>

  {/*avatar*/}
  <div class="avatar">
    <div class="avatar__letters">
      AK
    </div>
  </div>

  {/*About Me*/}
  <div class="about">
    <h1>About Me</h1>
    <h2>ENGINEER | DEVELOPER</h2>
    <p class="lead text-muted">Using Engineering and Programming to answer design problems with honest 
    solutions. Join me on my journey in becoming a Full Stack Developer. </p>
  </div>

 {/*Social Media*/}
 <div class="media">
   <div class="socialinsta">
     <a href="https://www.instagram.com/behind.the_code/"><FaInstagram /> </a> 
   </div>
   <div class="socialgit">
     <a href="https://github.com/kapotaalan"><FaGithub /> </a>
   </div>
   <div class="socialemail">
     <FaEnvelope/>
   </div>
  </div>
</div>
}


ReactDOM.render(<Webpage/>,document.getElementById('root'));
