import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import cartItemReducer from './cartItemReducer';
const store=configureStore({reducer:{showCart:cartReducer,cartItem:cartItemReducer}});
store.subscribe(()=>{
  const state= store.getState();
  console.log(state);
})
export default store;