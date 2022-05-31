import React from 'react';
import './css/App.css';
import { BsLinkedin, BsWhatsapp, BsGithub,BsInstagram } from "react-icons/bs";
import TitleBar from './components/titleBar';
import Status from './components/status';
import CardProjects from './components/cardProjects';
import BaseBoard from './components/baseBoard';

function App() {
  return (
    <main className='main'>

    <TitleBar />
    
    <Status />

    <CardProjects/>

   <BaseBoard />
    </main>
    
  );
}

export default App;
