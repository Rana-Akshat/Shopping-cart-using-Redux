import React from "react";
import { additem } from "../features/cartSlice";
import { useAppDispatch } from "../app/hooks";

const Product = ({ id, name, price }) => {

    const dispatch = useAppDispatch()

    const handleadd = () => {
        dispatch(additem({ id, name, price }))
    }

    return (
        <div className="prod-container">
            <h2>{name}</h2>
            <p>Price : Rs. {price.toFixed(2)}</p>
            <button className="add-bttn" onClick={handleadd}>Add to cart</button>
        </div>
    )
}

export default Product