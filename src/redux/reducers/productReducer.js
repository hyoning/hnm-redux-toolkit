import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    productList:[],
    selectedItem: null,
    optionList:[],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        getAllProducts(state, action){
            state.productList = action.payload.data;
        },
        getProductDetail(state,action){
            state.selectedItem = action.payload.data;
        },
        getProductOption(state,action){
            state.optionList = action.payload.dataSize;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer
