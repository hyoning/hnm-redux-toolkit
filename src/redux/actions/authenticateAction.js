import { authenticateActions } from '../reducers/authenticateReducer'

function login(id,password){
    return (dispatch, getState) => {
        dispatch(authenticateActions.getLogin({id, password}));
    }
}
function logout() {
    return (dispatch) => dispatch(authenticateActions.getLogout());
}

export const authenticateAction = { login, logout };