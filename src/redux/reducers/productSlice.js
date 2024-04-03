import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let initialState = {
    productList:[],
    selectedItem: null,
    optionList:[],
    isLoading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async(searchQuery, thunkApi) => {
        try{
            let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products?q=${searchQuery}`;
            let response = await fetch(url)
            return await response.json()
        } catch(error){
            thunkApi.rejectWithValue(error.message)
        }
})
export const fetchDetails = createAsyncThunk(
    'product/fetchDetail',
    async(id, thunkApi) => {
        try{
            let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products/${id}`;
            let response = await fetch(url);
            return await response.json();
        } catch(error){
            thunkApi.rejectWithValue(error.message) 
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending,(state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state, action) => {
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(fetchDetails.pending,(state) => {
            state.isLoading = true;
        })
        .addCase(fetchDetails.fulfilled,(state, action) => {
            state.isLoading = false;
            state.selectedItem = action.payload;
        })
        .addCase(fetchDetails.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
})

export const productActions = productSlice.actions
export default productSlice.reducer
