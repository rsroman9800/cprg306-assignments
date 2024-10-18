"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="bg-slate-900 p-4">
            <h1 className="text-3xl mx-3 font-bold text-slate-50">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
        </main>
    );
}