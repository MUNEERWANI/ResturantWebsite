import CartContext from "./cart-context";
import {useReducer} from 'react';

const defaultCartState={
    items:[],
    totalAmount:0
};

const cartReducer=(state,action)=>{//this is cartreducer function it has bydefault two arguments latest state and action latest
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
        const existingCartItem=state.items[existingCartItemIndex]
        let updatedItems;
        if(existingCartItem){//if item already present in cart add amount to item
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount,
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else{
            updatedItems=state.items.concat(action.item); 
        }
        
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
       
    };
    if(action.type==='REMOVE'){
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id);//finding element index
        const existingItem=state.items[existingCartItemIndex]; // getting element
        const updatedTotalAmount=state.totalAmount-existingItem.price;//updating total amount
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems=state.items.filter(item=>item.id!== action.id);
        }
        else{
            const updatedItem={...existingItem,amount:existingItem.amount-1};
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount,

        }
        
    }

    return defaultCartState;
};
const CartProvider=(props)=>{//this is the main function in which we will use useReducer as well to maintain state
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({ type:'ADD',item:item, })
    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({
            type:'REMOVE',
            id:id
        })
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
}
export default CartProvider;