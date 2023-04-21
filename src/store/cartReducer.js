import { createSlice } from "@reduxjs/toolkit";
const initialState={isToggle:false,notification:null}
const cartReducer=createSlice({
    name:'Toggle',
    initialState,
    reducers:{
        toggle:(state)=>{
            state.isToggle=!state.isToggle;
            
        },
        setNotification:(state,action)=>{
            state.notification={status:action.payload.status,
            title:action.payload.title,
           message:action.payload.message}

         }
    }
}
)
export const toggleAction=cartReducer.actions;
export default cartReducer.reducer;