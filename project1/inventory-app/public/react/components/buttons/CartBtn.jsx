import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartBtn = ({setIsCart}) => {

    const state = useSelector((state) => state.handleCart)

    const handleClick = () => {
        setIsCart(true)

    } 

    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2" onClick={handleClick}>
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn