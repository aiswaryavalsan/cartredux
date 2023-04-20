import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../store/cartReducer';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartButtonHandler=()=>{
    dispatch(toggleAction.toggle());
  
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
