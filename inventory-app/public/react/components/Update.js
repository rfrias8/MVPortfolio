import React, {useState} from "react";

import apiURL from '../api';
import Navbar from "./NavBar";

export function Update ({singleItem, setSingleItem, updateItem, setUpdateItem}) {

    const [title, setTitle] = useState(singleItem.title);
    const [price, setPrice] = useState(singleItem.price);

    const [description, setDescription] = useState(singleItem.description);
    const [category, setCategory] = useState(singleItem.category);

    const [image, setImage] = useState(singleItem.image);

    const [rating, setRating] = useState(singleItem.rating);


    const handleUpdate = async (event) => {
        window.location.reload(false)
        try{
        event.preventDefault();
            const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
            // our NEW/UPDATED data here
                title: title,
                price: price,
                description: description,
                category: category,
                image: image,
                rating: rating
            })
        })
            const data = await response.json();

            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
            setImage("");
            setRating("");

            setUpdateItem(false);
            setSingleItem(false);

        } catch (err) {
            console.log("update error", err)
        }
        
    }

    return (
        <>
            <Navbar setUpdateItem={setUpdateItem} setSingleItem={setSingleItem} updateItem={updateItem}/>
            <div className="container d-flex flex-column justify-content-center align-items-center my-5">
                <h2 className="my-3">Update an Item</h2>

                <form className="row g-4" onSubmit={handleUpdate}>
                    <div className="col-md-9">
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} required/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <input type="number" min="0" step="any" className="form-control" id="inputPrice" placeholder="Price" value={price} onChange={event => setPrice(event.target.value)} required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="inputDescription" placeholder="Item Description" value={description} onChange={event => setDescription(event.target.value)} required/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputCategory" className="form-label">Category</label>
                        <input type="text" className="form-control" id="inputCategory" placeholder="Category" value={category} onChange={event => setCategory(event.target.value)} required/>
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputImage" className="form-label">Image</label>
                        <input type="text" className="form-control" id="inputImage" placeholder="Item Image" value={image} onChange={event => setImage(event.target.value)} required/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputRating" className="form-label">Rating</label>
                        <input type="number" min="0" step="any" className="form-control" id="inputRating" placeholder="Rating" value={rating} onChange={event => setRating(event.target.value)} required/>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary px-4 py-2">Update Item!</button>
                        <button className="btn btn-primary px-4 py-2 ms-3" onClick={() => setUpdateItem(false)}>Back to Item</button>
                    </div>
                </form>
            </div>
        </>
    )
};