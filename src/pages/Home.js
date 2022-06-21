import React from "react";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

function Home(props) {

    let navigate = useNavigate();

    const handleButton = () => {
        setTimeout(() => {
            navigate.replace('/sobre');
        }, 2000)
    }

    const handleSetarNome = () => {
        props.setName('Usuario')
    }

    const handleIncrement = () => {
        props.increment()
    }
    return(
        <div>
            <h4>Página HOME</h4>

            NOME: {props.name}<br/>
            CONTAGEM: {props.contador}<br/><br/>

            <button onClick={handleSetarNome}>Setar nome para: Usuario </button>
            <button onClick={handleIncrement}>+1</button>

            <br/><br/>
            <button onClick={handleButton}>Ir para a página Sobre</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch ({
            type: 'SET_NAME',
            payload: {name:newName}
        }),
        increment:() => dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    }
}


const mapStateToProps = (state) => {
    return {
        name:state.usuario.name,
        contador:state.usuario.contador
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)