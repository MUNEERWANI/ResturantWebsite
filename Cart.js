import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context'; //import the context object that we have created 
import CartItem from './CartItem';

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;//this is to display total amount in cart .it will come preconfigured from CartContext
    const hasItems=cartCtx.items.length>0 //this to check if we have to display order button or not

    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({
            ...item,amount:1,
        });
    }
    const cartItems=(
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>{
            return <CartItem  key={item.id} name={item.name} amount={item.amount} price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}/>
        })}
    </ul>)



    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <button className={classes['button--alt'] }onClick={props.onClose}>Close</button>
                {hasItems&&<button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;