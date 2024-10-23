"use client";

import {useState, useEffect} from 'react';

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0]; // Return the meal details
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMealDetails, setSelectedMealDetails] = useState({}); 
    const [selectedMealId, setSelectedMealId] = useState(null); // Track selected meal ID


    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        if (meals) {
            setMeals(meals);
        } else {
            setMeals([]);
        }
    }

    const handleMealClick = async (mealId) => {
        try {
            const mealDetails = await fetchMealDetails(mealId); // Fetch meal details
            setSelectedMealDetails((prevState) => ({
                ...prevState,
                [mealId]: mealDetails, // Store details for this specific meal
            }));
            setSelectedMealId(mealId); // Set the selected meal ID to apply styles
        } catch (err) {
            setError("Error fetching meal details");
        }
    };

    useEffect(() => {
        loadMealIdeas();
      }, [ingredient]);

      return (
        <div>
            <h1 className="text-l text-slate-50 mb-4">Here are some meal ideas using {ingredient}:</h1>
            <ul className="space-y-2 w-1/4 ">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li 
                            key={meal.idMeal}
                            className="bg-slate-800 text-slate-50 p-1 rounded-xl shadow"
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            {meal.strMeal}
                            {selectedMealId === meal.idMeal && selectedMealDetails[meal.idMeal] && (
                                <div className="mt-2 p-2 rounded">
                                    <h3 className="text-m">Ingredients:</h3>
                                    <ul className="list-disc list-inside text-xs">
                                        {Object.keys(selectedMealDetails[meal.idMeal])
                                        .filter(key => key.startsWith("strIngredient") && selectedMealDetails[meal.idMeal][key]) // Filter for ingredients
                                        .map((key, index) => (
                                             <li key={index}>
                                                 {selectedMealDetails[meal.idMeal][key]} - {selectedMealDetails[meal.idMeal][`strMeasure${key.slice(13)}`]} {/* Match with the measurement */}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                     ))
                 ) : 
                (
                <p className="text-l text-slate-50 mb-4">No meals found using {ingredient}</p>
                )}
            </ul>
        </div>
    );
}

