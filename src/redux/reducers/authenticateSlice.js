import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let initialState={
    id:'',
    password:'',
    authenticate:false,
    isLoading: false,
}
const loginApi = async (id, password) => {
    return { id, password }; // 임시 반환 값
};

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async({id, password}, thunkApi) => {
        try{
            const response = await loginApi(id, password);
            return response;
        } catch(error){
            thunkApi.rejectWithValue(error.message)
        }
    }
)

export const fetchLogout = createAsyncThunk(
    'login/fetchLogout',
    async(_, thunkApi) => {
        try{     
            return {};
            // eslint-disable-next-line
        } catch(error){
            thunkApi.rejectWithValue(error.message)
        }
    }
)

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(fetchLogin.pending,(state) => {
            state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                // 로그인 성공 처리
                state.isLoading = false;
                state.id = action.payload.id;
                state.password = action.payload.password;
                state.authenticate = true;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                // 로그인 실패 처리
                // 예: state.error = action.payload;
                state.isLoading = false;
                state.authenticate = false;
            })
            .addCase(fetchLogout.pending,(state) => {
                state.isLoading = true;
                })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                // 로그인 성공 처리
                state.isLoading = false;
                state.id = '';
                state.password = '';
                state.authenticate = false;
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                // 로그인 실패 처리
                // 예: state.error = action.payload;
                state.isLoading = false;
                state.authenticate = false;
            });
    }
})

export const authenticateActions = authSlice.actions
export default authSlice.reducer