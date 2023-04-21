import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { toggleAction } from './store/cartReducer';
import Notification from './components/UI/Notification';

let initial=true;
function App() {
  const istoggle=useSelector(state=>state.showCart.isToggle)
  const notification=useSelector(state=>state.showCart.notification)
  const cart=useSelector(state=>state.cartItem)
  console.log(istoggle);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(initial){
      initial=false;
      return;
    }
   dispatch(toggleAction.setNotification({status:'pending',title:'sending..',message:'sending data...'}))
   const updatedb=async()=>{
   const response=await fetch("https://shopping-cart-cb9ed-default-rtdb.firebaseio.com/cart.json",{method:'put',body:JSON.stringify(cart)})
   if(!response.ok){
    throw new Error();
   }
   dispatch(toggleAction.setNotification({status:'Success',title:'success',message:'data sent successfully!' }))
  };
 updatedb().catch((e)=>{
  dispatch(toggleAction.setNotification({status:'error',title:'error',message:'something went wrong!' }))
 })
},[cart,dispatch])
  return (
    <>
    {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Layout>
  {!istoggle&&<Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
