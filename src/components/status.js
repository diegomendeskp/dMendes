import React from "react";
import { BsLinkedin, BsWhatsapp, BsGithub,BsInstagram } from "react-icons/bs";
import '../css/status.css'


function Status(){
    return(
<div className='status'><h1>Status</h1>
    <div className='backGroud'>
    <h2>Diego mendes da silva</h2>
    <h3>Rio de Janeiro - Brasil</h3>
    <ul>
      <li>desenvolvedor web</li>
      <li>front-end</li>
      <ul><li>JavaScript</li>
      <li>Html5</li>
      <li>Css3</li>
      <li>React</li>
      </ul>
    </ul>
    <p>Busco conhecimento e aprimoramento de todas as minhas habilidades</p> 
      <p>visando sempre melhorar ao maximo</p>
      <p>Tenho grande facilidade de aprendizado, e me adapto com rapidez</p>
      <p>Alem de grande criatividade e dedicação a tudo o que faço</p> 
      <p>e sempre tentando ajudar e apoiar aqueles a minha volta</p>
      </div>
    </div>
    );
};

export default Status;
