import { createSlice } from "@reduxjs/toolkit";

let initialState={
    id:'',
    password:'',
    authenticate:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers : {
        getLogin(state, action){
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        getLogout(state, action){
            state.id = '';
            state.password = '';
            state.authenticate = false;
        }
    }
})

export const authenticateActions = authSlice.actions
export default authSlice.reducer