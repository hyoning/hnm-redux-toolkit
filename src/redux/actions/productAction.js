function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    }
}
function getDetails(id){
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        let dataSize = data.size
        dispatch({type:"GET_DETAIL_SUCCESS", payload:{data}})
        dispatch({type:"GET_OPTION_SUCCESS", payload:{dataSize}})
    }
}
export const productAction={getProducts, getDetails}