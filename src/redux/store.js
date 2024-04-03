import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore ({
    reducer:{
        auth: authenticateReducer,
        product: productReducer,
    }
})
export default store;