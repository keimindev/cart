import React from 'react'
import { useGlobalContext} from './AppProvider'

function CartItem({id, img, title, price, amount}) {
    const { remove, increase, decrease, toggleAmount } = useGlobalContext();
    return (
        <>
        <div className='cart-item'>
            <div className="item-img"><img src={img} alt={title}></img></div>
            <div className="item-info">
                <p className="item-title">{title}</p>
                <p className="item-price">${price}</p>
                <button className='item-remove-btn'
                onClick={ () => remove(id)}>Remove</button>
            </div>
            <div className="item-amount">
                <button onClick={ () => toggleAmount(id, 'increase')}>▲</button>
                <p>{amount}</p>
                <button onClick={ () => toggleAmount(id, 'decrease')}>▼</button>
            </div>
        </div>
        </>
    )
}


export default CartItem