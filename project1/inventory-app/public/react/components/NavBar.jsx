import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./buttons/Login";
import Signup from "./buttons/signup";
import CartBtn from "./buttons/CartBtn";

const Navbar = ({setSingleItem, singleItem, setUpdateItem, updateItem, setAddItems, addItems, setIsCart, isCart, setAbout, about}) => {


    const state = useSelector((state) => state.handleCart)


    const handleClick = () => {
        if (singleItem) {
            setSingleItem(false)
        } else if (updateItem) {
            setUpdateItem(false)
            setSingleItem(false)
        } else if (addItems) {
            setAddItems(false)
        } else if (isCart) {
            setIsCart(false)
        } else if (about) {
            setAbout(false)
        }
    }

    const handleAbout = () => {
        setAbout(true)
    }


  return (
    <> 
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="https://www.youtube.com/watch?v=dUZGTfEQqqI" target={"_blank"}>
          Inventory App 📦
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home" onClick={handleClick}>
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#products" onClick={handleClick}>
                    Products
                </a>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleAbout}>
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Contact
                </a>
                </li>
            </ul>
          <Login />
          <Signup />
          <CartBtn setIsCart={setIsCart}/>
        </div>
      </div>
    </nav>
  </div>

      
    </>
  );
};

export default Navbar;
