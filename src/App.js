import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const istoggle=useSelector(state=>state.showCart.isToggle)
  console.log(istoggle);
  return (
    <Layout>
  {!istoggle&&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
