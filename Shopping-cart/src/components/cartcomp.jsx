import React from 'react'
import { selectitems, selecttotalprice } from '../features/cartSlice'
import { removeitem, reducequantity,buyitems } from '../features/cartSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
const Cartcomp = () => {
  
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectitems)
    const totalPrice = useAppSelector(selecttotalprice)

    const handleRemove = (id) => {
        dispatch(removeitem(id))
    }

    const handleReduce = (id) => {
        dispatch(reducequantity(id));
      };

    const handleBuy = () => {
        dispatch(buyitems())
        alert('Items proceeded to Checkout!')
    }

    return (
        <div className="cart-container">
            <h2 className='cart-heading'>Shopping Cart</h2>
            <hr />
            {items.length === 0 ? (
                <p>Your cart is empty...</p>
            ) : (
                <div className="cart-items">
                    {items.map((item) => (
                        <div className="item-list" key = {item.id}>
                            <p className="item-detail">{item.name} : Rs.{item.price} X {item.quantity}</p>
                            <button className="item-remove" onClick={() =>handleRemove(item.id)}>Remove from cart</button>
                            <button onClick={() => handleReduce(item.id)}>-</button>
                        </div>
                    ))}
                    <div className="total-price">
                        <h3>Total Price of cart items: Rs. {totalPrice.toFixed(2)}</h3>
                        <button className="buy-bttn" onClick={() => handleBuy()}>Proceed to Buy</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cartcomp