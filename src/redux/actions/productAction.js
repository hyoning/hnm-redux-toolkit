import { productActions } from '../reducers/productReducer'

function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json()
        dispatch(productActions.getAllProducts({data}))
    }
}
function getDetails(id){
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        let dataSize = data.size
        dispatch(productActions.getProductDetail({data}))
        dispatch(productActions.getProductOption({dataSize}))
    }
}
export const productAction={getProducts, getDetails}