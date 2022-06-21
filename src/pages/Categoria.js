import React from "react";
//import {useParams} from 'react-router-dom'; AULA 23
import {useLocation} from 'react-router-dom';

function useQuery() {

    return new URLSearchParams(useLocation().search)
}



function Categoria() {

    let query = useQuery();

    let cat = query.get('tipo');
    let subtipo = query.get('subtipo');

    return(
        <div>
            <h4>Página Categoria</h4>
            Exibindo itens da categoria: {cat} - {subtipo}
        </div>
    )
}

export default Categoria;