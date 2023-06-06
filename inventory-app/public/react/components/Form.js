import React, {useState} from "react";

import apiURL from '../api';
import Navbar from "./NavBar";

export function Form ({addItems, setAddItems, items, setItems}) {


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("price: ", 0.00);

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [image, setImage] = useState("");

    const [rating, setRating] = useState("rating", 0);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
            {
                title: title,
                price: price,
                description: description,
                category: category,
                image: image,
                rating: rating
            }
            )
          });
          const data = await response.json();

        //   console.log(data.title)
        //   I need bottom code if not I have to manually refresh to see the new submitted page
        // ! React expects a completely new value - I need to use spread syntax to render a new array (new array will have brand new item created when clicking the submit button)
          setItems([...items,
                data
            ]);

            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
            setImage("");
            setRating("")

            setAddItems(false)

        } catch (err) {
            console.log("form error", err)
        }  

        setAddItems(false)


	  }

    return (
        <>
             <Navbar setAddItems={setAddItems} addItems={addItems}/>
            <div className="container d-flex flex-column justify-content-center align-items-center my-5">
                <h2 className="my-3">Add an Item</h2>

                <form className="row g-4" onSubmit={handleSubmit} >
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
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary px-4 py-2">Add Item!</button>
                    </div>
                    <div className="col-md-2 my-n5">
                        <button className="btn btn-primary px-4 py-2" onClick={() => setAddItems(false)}>Back to Inventory</button>
                    </div>
                </form>
            </div>

        </>
    ) 
};