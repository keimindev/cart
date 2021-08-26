import React from 'react'
import data from './data'
import { useGlobalContext} from './AppProvider'
import CartItem from './CartItem'


function CartContainer() {
    const { cart, total, clearCart } = useGlobalContext()
    if( cart.length === 0){
        return(
            <section className="cart">
                <header>
                    <h2>YOUR BAG</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <>
        <div className="cart">
        <header>
            <h2>YOUR BAG</h2>
        </header>
        <div>
            {cart.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className="cart-total">
            <div className="total">Total <span>$ {total}</span></div>
            </div>
            <button 
            className="clear-btn"
            onClick={ clearCart }
            >CLEAR CART</button>
        </footer>        
        </div>
        </>
    )
}


export default CartContainer