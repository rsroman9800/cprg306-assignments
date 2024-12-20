"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList ( { items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name"); // State to track sorting

  items.sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // sort items by name or category

  return (
    <main className="p-2">
      <div className="flex items-center space-x-4">
        <p>Sort By: </p>
        <button 
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 text-white rounded w-36 ${sortBy === "name" ? "bg-orange-600 font-bold" : "bg-orange-400"}`}>
          Name
        </button>
        <button 
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 text-white rounded w-36 ${sortBy === "category" ? "bg-orange-600 font-bold" : "bg-orange-400"}`}>
          Category     
        </button> 
      </div>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </main>
  )
}