let initialState = {
    productList:[],
    selectedItem: null,
    optionList:[],
}
function productReducer(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state, productList : payload.data};
        case "GET_DETAIL_SUCCESS":
            return{...state, selectedItem : payload.data};
        case "GET_OPTION_SUCCESS":
            return{...state, optionList : payload.dataSize};
        default : 
            return{...state}
    }
}
export default productReducer;