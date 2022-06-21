const initialState = {
    name:''
}


const UsuarioReducer = (state = initialState, action ) =>{

    switch(action. type){
        case 'SET_NAME':
            return{...state, name: action.payload.name};
        break;
    }

    return state
}

export default UsuarioReducer