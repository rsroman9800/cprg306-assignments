"use client";

import { useState } from "react";

export default function QuantityComponent()
{
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity)); // Ensure the quantity is never more than 20
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity)); // Ensure the quantity is never less than 1
    };

    const handleSubmit = () => {
        alert(`The current quantity is: ${quantity}`); // Show an alert with the current quantity

        setQuantity(1); // Reset the quantity to 1 after submitting
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
                <p className="text-xl font-bold">Quantity: {quantity}</p>
                <button 
                    onClick={decrement}
                    disabled={quantity === 1}
                    className={`px-3 py-1 rounded text-white font-bold ${
                    quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-sky-400 hover:bg-sky-600'
                    }`} // Disable the button when the quantity is 1
                >
                    -
                </button>
                <button 
                    onClick={increment}
                    disabled={quantity === 20}
                    className={`px-3 py-1 rounded text-white font-bold ${
                    quantity === 20 ? 'bg-gray-500 cursor-not-allowed' : 'bg-sky-400 hover:bg-sky-600'
                    }`} // Disable the button when the quantity is 20
                >
                    +
                </button>
            </div>
            
            <div>
            <button
                onClick={handleSubmit}
                className="bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded"
            >
                Submit
            </button>
            </div>
        </div>
    );
}