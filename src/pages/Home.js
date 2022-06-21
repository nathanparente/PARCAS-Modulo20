import React from "react";
import {useNavigate} from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    const handleButton = () => {
        setTimeout(() => {
            navigate.replace('/sobre');
        }, 2000)
    }

    return(
        <div>
            <h4>Página HOME</h4>
            <button onClick={handleButton}>Ir para a página Sobre</button>
        </div>
    )
}

export default Home;