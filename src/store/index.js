import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
const store=configureStore({reducer:{showCart:cartReducer}});
store.subscribe(()=>{
  const state= store.getState();
  console.log(state);
})
export default store;