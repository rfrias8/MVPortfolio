// How to Add Item to Cart

import { SingleItem } from "../../components/SingleItem";

export const addCart = (SingleItem) => {
    return {
        type: "ADDITEM",
        payload: SingleItem
    }
}

// How to Delete Item from Cart

export const delCart = (SingleItem) => {
    return {
        type: "DELITEM",
        payload: SingleItem
    }
}