import { createSlice } from "@reduxjs/toolkit";
const initialState={isToggle:false}
const cartReducer=createSlice({
    name:'Toggle',
    initialState,
    reducers:{
        toggle:(state)=>{
            state.isToggle=!state.isToggle;
            
        }
    }
}
)
export const toggleAction=cartReducer.actions;
export default cartReducer.reducer;