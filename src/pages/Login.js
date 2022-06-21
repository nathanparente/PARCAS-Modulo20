import React from "react";
import {connect} from 'react-redux';

function Login(props) {

    const handleFelipe = () => {
        props.setName('Felipe')
    }

    return(
        <div>
            <h4>Página de LOGIN</h4>
            Você precisa fazer login para acessar SOBRE 
            <br/><br/>

            O nome é: {props.name}
            <br/><br/>
            <button onClick={handleFelipe}>Trocar nome para Felipe</button>
        </div>
    )
}

const mapStateToProps = state => ({
    name:state.usuario.name
})

const mapDispatchToProps = dispatch => ({
    setName: (newName) => dispatch({
        type:'SET_NAME',
        payload: {name:newName}
    })
})

export default connect(mapStateToProps, mapDispatchToProps )(Login)