import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItem=useSelector(state=>state.cartItem.item);
  console.log(cartItem)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItem.map((item)=>{return(
        <CartItem key={item.id}
        item={item}
      />
      )})}
       
      </ul>
    </Card>
  );
};

export default Cart;
