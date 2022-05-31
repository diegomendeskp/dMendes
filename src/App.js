import React from 'react';
import './App.css';
import { BsLinkedin, BsWhatsapp, BsGithub,BsInstagram } from "react-icons/bs";

function App() {
  return (
    <main className='main'>

    <div className="title">
     <div className='titleBar'>
       <a href='#'>
       <img className='avatar' src={require('./diego.png')} />
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
    
    <div className='status'><h1>Status</h1>
    <div className='backGroud'>
    <h2>Rio de Janeiro - Brasil</h2>
    <h3>Diego mendes da silva</h3>
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

    <div className='projects'>
    <div className='cardProjects'>
      <div className='cardIndividual'>
       <a href='https://dices-omega.vercel.app/'>
        <img className='imageCard' src={require('./arauto.png')}/>
        <div className='middle'>
        <div class="text">Projeto de registro de usuarios e site de boardGame</div>
        </div>
        </a>
      </div>
      
    </div>

    </div>
    </main>
    
  );
}

export default App;
