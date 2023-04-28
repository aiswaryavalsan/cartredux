import { cartItemReducerAction } from "./cartItemReducer";
import { toggleAction } from "./cartReducer";
export const sendToDB=(cart)=>{
    return (async(dispatch)=>{
        dispatch(toggleAction.setNotification({status:'pending',title:'sending..',message:'sending data...'}))
        const updatedb=async()=>{
        const response=await fetch("https://shopping-cart-cb9ed-default-rtdb.firebaseio.com/cart.json",{method:'put',body:JSON.stringify(cart)})
        if(!response.ok){
         throw new Error();
        }
       
       };
       try{
        await updatedb();
        dispatch(toggleAction.setNotification({status:'Success',title:'success',message:'data sent successfully!' }))
       }
    catch{
       dispatch(toggleAction.setNotification({status:'error',title:'error',message:'something went wrong!' }))
    }
   
 
})}
export const fetchData=()=>{
    return(async(dispatch)=>{
        const fetchDatafromDb=async()=>{
            const response=await fetch("https://shopping-cart-cb9ed-default-rtdb.firebaseio.com/cart.json",{method:'get'})
            if(!response.ok){
                throw new Error("something wrong happend")
            }
            const data=await response.json();
            dispatch(cartItemReducerAction.updateCart({item:data.item,totalQuantity:data.totalQuantity}))

        }
      try{
       await fetchDatafromDb();
       
      }
      catch{
        dispatch(toggleAction.setNotification({status:'error',title:'error',message:'something went wrong!' }))
      }
       
       
    })
}