import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeitem, buyitems } from '../features/cartSlice'
const Cartcomp = () => {
  
    const dispatch = useDispatch()
    const { items, totalPrice } = useSelector((state) => state.cart)

    const handleRemove = (id) => {
        dispatch(removeitem(id))
    }

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