import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
//import Categoria from './pages/Categoria'; //AULA 23
//PARA INSTALAR O ROUTER    npm install react-router-dom

//NA AULA 23 ADICIONEI O <li>categoria>Esportes,Notícias,Viagem e o <Route path="/categoria/:cat" element={<Categoria/>}/>
//NA AULA 24 USEI A QUERY STRING NO ARQUIVO Categoria.js com o {useLocation} e a function useQuery()
//NA AULA 25 ADICIONEI UMA ROTA PARA DAR UM AVISO <Route path="/*" element={<h4>Página não encontrada</h4>}/>
/*
const PrivateRoute = ({children}) => {

  return(
    isLogged ? children : <Navigate to="/login"/>
  );
}
*/


const isLogged = true;
function App () {

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Meu site Legal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/sobre" element={isLogged ? <Sobre/> : <Navigate to="/login"/>}/>
          <Route path="/*" element={<h4>Página não encontrada</h4>}/>
        </Routes>
        <hr/>
        <footer>
          Todos os direitos reservados a Nathan Vieira Parente
        </footer>
      </BrowserRouter>
    </>
  )
}

/* RETIRADOS NA AULA 27

              <li>
                <Link to="/quem-somos">Quem Somos</Link>
              </li>
              <li> 
                <Link to="/categoria?tipo=esportes">Esportes</Link>
              </li>
              <li>
                <Link to="/categoria?tipo=noticias">Notícias</Link>
              </li>
              <li>
                <Link to="/categoria?tipo=viagem">Viagem</Link>
              </li>

              <Route path="/quem-somos" element={<Navigate to="/sobre"/>}/>
              <Route path="/categoria" element={<Categoria/>}/>
*/

export default App