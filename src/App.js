import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

import Notification from './components/UI/Notification';
import { fetchData, sendToDB } from './store/actionCreator';

function App() {
  const istoggle=useSelector(state=>state.showCart.isToggle)
  const notification=useSelector(state=>state.showCart.notification)
  const cart=useSelector(state=>state.cartItem)
  console.log(istoggle);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  useEffect(()=>{
   if(cart.changed){
    dispatch(sendToDB(cart));
   }
  
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
