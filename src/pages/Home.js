import React from "react";
import {useNavigate} from 'react-router-dom';
//import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

function Home() {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const name = useSelector(state => state.usuario.name)
    const contador = useSelector(state => state.usuario.contador)

    const handleButton = () => {
        setTimeout(() => {
            navigate.replace('/sobre');
        }, 2000)
    }

    const handleSetarNome = () => {
        dispatch({
            type:'SET_NAME',
            payload:{name:'Usuario'}
        })
    }

    const handleIncrement = () => {
        dispatch({
            type:'INCREMENT_CONTADOR'
        })
    }
    return(
        <div>
            <h4>Página HOME</h4>

            NOME: {name}<br/>
            CONTAGEM: {contador}<br/><br/>

            <button onClick={handleSetarNome}>Setar nome para: Usuario </button>
            <button onClick={handleIncrement}>+1</button>

            <br/><br/>
            <button onClick={handleButton}>Ir para a página Sobre</button>
        </div>
    )
}

export default Home;