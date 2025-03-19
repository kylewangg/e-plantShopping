import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, updateQuantity } from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store;
