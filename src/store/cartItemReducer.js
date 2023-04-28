import { createSlice } from "@reduxjs/toolkit";

const cartItemReducer=createSlice({
    name:'cartitem',
    initialState:{item:[],totalQuantity:0,changed:false},
    reducers:{
        updateCart:(state,action)=>{
            state.item=action.payload.item||[];
            state.totalQuantity=action.payload.totalQuantity;
        },
        addToCart:(state,action)=>{
            state.totalQuantity++;
            state.changed=true;
            const newItem=action.payload;
            const existingItem=state.item.find((item)=>item.id===newItem.id)
            if(!existingItem){
                state.item.push({id:newItem.id,title:newItem.title,quantity:1,price:newItem.price,total:newItem.price})
            }
            else{
                existingItem.quantity=existingItem.quantity+1;
                existingItem.total=existingItem.quantity*newItem.price;
            }

        },
        removeFromCart:(state,action)=>{
            state.totalQuantity--;
            state.changed=true;
            const itemToBeRemoved=state.item.find((item)=>item.id===action.payload.id);
            if(itemToBeRemoved.quantity===1){
           state.item=state.item.filter((item)=>item.id!==action.payload.id)
            }
            else{
                itemToBeRemoved.quantity=itemToBeRemoved.quantity-1;
                itemToBeRemoved.total=itemToBeRemoved.total-itemToBeRemoved.price;
            }
          
        }
       
    }
})
export const  cartItemReducerAction=cartItemReducer.actions;
export default cartItemReducer.reducer;