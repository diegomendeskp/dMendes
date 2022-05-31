import React from "react";
import { BsLinkedin, BsWhatsapp, BsGithub,BsInstagram } from "react-icons/bs";
import '../css/cardProjects.css'



function CardProjects(){
    return(
<div className='projects'>
    <div className='cardProjects'>
      <div className='cardIndividual'>
       <a href='https://dices-omega.vercel.app/'>
        <img className='imageCard' src={require('../img/arauto.png')}/>
        <div className='middle'>
        <div class="text">Projeto de registro de usuarios e site de boardGame</div>
        </div>
        </a>
      </div>
      
      <div className='cardIndividual'>
       <a href='https://shopgames.vercel.app/'>
        <img className='imageCard' src={require('../img/shopGame.png')}/>
        <div className='middle'>
        <div class="text">Projeto de loja de jogos</div>
        </div>
        </a>
      </div>

    </div>

    </div>
    );
};

export default CardProjects;
