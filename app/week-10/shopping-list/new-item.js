"use client";

import { useState } from "react";

export default function GroceryComponent( {onAddItem})
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [nameError, setNameError] = useState(false);

    const increment = () => {
        setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity)); // Ensure the quantity is never more than 20
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity)); // Ensure the quantity is never less than 1
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "") 
            {
                setNameError(true);
                return; // Prevent form submission if the name is empty
            }
        else
            {
                setNameError(false);
            }
        const newId = Math.random().toString(36).substring(2, 18);
        const newItem = {id: newId, name, quantity, category};
        onAddItem(newItem);
        console.log(newItem);

        // Reset the form to the defaults
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex flex-col items-start space-y-4 ml-5 m-4">
            <p className="text-2xl font-bold">Add a Grocery Item</p>
            <div className="flex flex-col items-center space-y-4 w-96">
                <input
                    id="name"
                    placeholder="Item Name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                        if (event.target.value !== "") {
                            setNameError(false);
                        }
                    }}
                    className="border border-black m-2 text-black rounded w-full"
                    required
                />
                {nameError && <p className="text-red-500 text-l text-sm">Please fill out this field</p>}
    
                <div className="flex items-center justify-center space-x-4 w-full">
                    <p className="text-xl">Quantity: {quantity}</p>
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        className={`px-3 py-1 rounded text-white font-bold ${
                            quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-sky-400 hover:bg-sky-600'
                        }`}
                    >
                        -
                    </button>
                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        className={`px-3 py-1 rounded text-white font-bold ${
                            quantity === 20 ? 'bg-gray-500 cursor-not-allowed' : 'bg-sky-400 hover:bg-sky-600'
                        }`}
                    >
                        +
                    </button>
                </div>
    
                <select
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="border border-black m-2 text-black rounded w-full"
                >
                    <option value="" disabled>Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
    
                <div>
                    <button
                        onClick={handleSubmit}
                        className="bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
      
}