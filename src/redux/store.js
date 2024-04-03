import productReducer from './reducers/productSlice';
import authenticateReducer from './reducers/authenticateSlice';

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore ({
    reducer:{
        auth: authenticateReducer,
        product: productReducer,
    }
})
export default store;