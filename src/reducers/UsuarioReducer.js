const initialState = {
    name:'VISITANTE',
    contador:0
};


const UsuarioReducer = (state = initialState, action ) =>{

    switch(action.type){
        case 'SET_NAME':
            return{...state, name: action.payload.name};
        break;
        case 'INCREMENT_CONTADOR':
            let newCount = state.contador + 1;
            return{...state, contador:newCount};
    }

    return state
}

export default UsuarioReducer