import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Player } from "@lottiefiles/react-lottie-player";
function App() {


  return (
    <>
      <header>
        <nav id="header-nav">
          <a href='#titulo1'>Sobre</a>
          <a href='#titulo2'>Projetos</a>
          <a href='#titulo3'>Contato</a>
        </nav>
      </header>
      <h1 id='titulo1'>Portfolio</h1>
      <p>Olá 👋</p>
      <p>Eu Sou o Hyan, Tenho 19 anos e sou estudante de Desenvolvimento de Sistemas!</p>
      <img id="hyan-image" src='src/hyan.png' width={500} height={500}></img>
      <h1>Experiências</h1>
      <li>Luiz barbearia (2020 a 2021)
Cargo: Recepção e organização do ambiente
</li>
<li>
DVA veículos ( 14/08/2019 a 14/12/2020)
Cargo: Controle e organização de
estoque
</li>
<li> RaffinatoSoftwares(02/06/22
a 29/08/22)
Cargo: Suporte técnico N1</li>
<li>Guarda Vidas: Temporada 2022/2023</li>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1 id='titulo2'>Projetos</h1>
      <h1>Petflix</h1>


      <img id="fotoPetflix" src="src/petflix.jpg" alt="Foto Petflix" width={1100} height={600} />
      
      <a href='https://petflix-6icr.onrender.com'>https://petflix-6icr.onrender.com</a>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1 id='titulo3'>Contato</h1>
      <div id= "social-links">
      <a href="https://www.linkedin.com/in/hyan-de-souza-ventura-588393234/" id="linkedin-share-btt" rel="nofollow" target="_blank" class="linkedin-share-button"></a>
      <a href="https://github.com/hyanventura" id="github-share-btt" rel="nofollow" target="_blank>"><img id="imgGitgub" src='src/github-mark.png' width={40} height={40} ></img></a>
      </div>



    </>


  )
}

export default App
