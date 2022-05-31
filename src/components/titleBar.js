import React from "react";
import { BsLinkedin, BsWhatsapp, BsGithub,BsInstagram } from "react-icons/bs";
import '../css/titleBar.css'


function TitleBar(){
    return(
<div className="title">
     <div className='titleBar'>
       <a href='https://diego-mendes.vercel.app/'>
       <img className='avatar' src={require('../img/diego.png')} />
       </a>
     </div>

     <div className='privateData'>
      <a href='https://www.linkedin.com/in/diego-mendes-da-silva-7a80a6229/'> <BsLinkedin className='icon' /></a>
      <a href='https://contate.me/Diego.m'> <BsWhatsapp className='icon'/> </a>
      <a href='https://github.com/diegomendeskp'> <BsGithub className='icon'/> </a>
      <a href='https://www.instagram.com/hunterp7/'> <BsInstagram className='icon'/></a>
     </div>

     <div className='menuBar'>
     <a href='#' >Home</a> 
     <a href='#' >sobre</a>
     <a href='#' >Habilidades</a>
     <a href='#' >Projetos</a>
     </div>
    </div>
    );
};

export default TitleBar;
