import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../store/cartReducer';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
   const quantity=useSelector(state=>state.cartItem.totalQuantity);
  
  const dispatch=useDispatch();
  const cartButtonHandler=()=>{
    dispatch(toggleAction.toggle());
  
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
