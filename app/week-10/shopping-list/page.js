"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const [selectedMealId, setSelectedMealId] = useState(null);

    const loadItems = async () => {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    }

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        const id = await addItem(user.uid, newItem);
        
        setItems(prevItems => [...prevItems, { ...newItem, id }]);
    };

    const handleItemSelect = (item) => {
        const name = item.name;
    
        const cleanedName = name
            .split(',')[0] // Split to remove size after the comma
            .replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '') // Remove emojis
            .trim(); // Trim any extra spaces

        setSelectedItemName(cleanedName); // Update the state with cleaned name
    };

    const handleMealSelect = (mealId) => {
        setSelectedMealId(mealId); // Set selected meal ID to fetch details
    };

    if (!user) {
        return (
            <div>
                <p>Please login to access this page.</p>
                <p className="hover:underline"><Link href="/week-9">Login at home page</Link></p>
            </div>
        );
    }

    return (
        <main className="bg-slate-900 p-4">
            <h1 className="text-3xl mx-3 font-bold text-slate-50">Shopping List</h1>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={(item) => handleItemSelect(item)} />
                </div>
                <div className="w-1/2">
                    {selectedItemName && (
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold text-slate-50 mb-2">Meal Ideas</h2>
                            <MealIdeas 
                                ingredient={selectedItemName}
                                onMealSelect={handleMealSelect}
                                selectedMealId={selectedMealId}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}