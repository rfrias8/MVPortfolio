import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import apiURL from '../api';
import Navbar from "./NavBar";
import {Switch, Route, Routes} from "react-router-dom";
import Cart from "./Cart"


import { Update } from "./Update";

export function SingleItem ({singleItem, setSingleItem, items, setItems, updateItem, setUpdateItem, isCart, setIsCart}) {

    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const dispatch = useDispatch();

    const addProduct = (singleItem) => {
        if (cartBtn === "Add to Cart") {
        dispatch(addCart(singleItem))
        setCartBtn("Remove from Cart")
        } else {
            dispatch(delCart(singleItem))
            setCartBtn("Add to Cart")
        }
    }

    const handleClick = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
            method: "DELETE"
       });
       const data = await response.json();

       // re-fetch the new list of items - does not include deleted item
       const res = await fetch(`${apiURL}/items`);
       const itemsData = await res.json();
       setItems(itemsData);
    //    Once delete button is clicked, default component (App) will render
       setSingleItem(null)
    }

        return (
        <>
            {
                updateItem ? (
                    <Update singleItem={singleItem} setSingleItem={setSingleItem} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
                ) : isCart ? (
                    <div>
                        <Navbar  setIsCart={setIsCart} isCart={isCart} singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
                        <Routes>
                            <Route path="/cart" element={<Cart />}/>
                        </Routes>
                    </div>
                ) :
                    <>
                        <Navbar setIsCart={setIsCart} isCart={isCart} setSingleItem={setSingleItem} singleItem={singleItem}  items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
                        <br></br><br></br><br></br><br></br>
                        <div className="container py-5">
                            <div className="row py-4">
                                <div className="col-md-6">
                                    <img src={singleItem.image} alt={singleItem.title} style={{height: "400px", width: "400px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="text-uppercase text-black-50">
                                        {singleItem.category}
                                    </h4>
                                    <h1 className="display-5">{singleItem.title}</h1>
                                    <p className="lead "><strong className="fw-bolder">Rating</strong> {singleItem.rating}/5 <i className="fa fa-star"></i></p>
                                    <h3 className="display-6 fw-bold my-4">$ {singleItem.price}</h3>
                                    <p className="lead">{singleItem.description}</p>
                                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(singleItem)}>{cartBtn}</button>
                                    <button className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</button>
                                    <div className="my-3">
                                        <button className="btn btn-dark px-4 py-2" onClick={() => setUpdateItem(true)}>Update Item</button>
                                        <button className="btn btn-dark px-4 py-2 ms-2" onClick={handleClick}>Delete Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
};