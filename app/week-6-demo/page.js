"use client";

import dogsJson from "./dogs.json"; // dogsJson is an array of objects
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(0);
    let dogs = [...dogsJson]; // shallow copy of dogsJson
    dogs.sort((a, b) => a.name.localeCompare(b.name)); // sort dogs by name

    dogs = dogs.filter((dog) => dog.name.length > 2); // filter out dogs with names less than 5 characters

    const handleClick = (id) => {
        if (selectedDogId === id) {
            setSelectedDogId(0);
            return;
        }
        setSelectedDogId(id);
    };

    return (
        <main className="p-2">
            <h1 className="text-2xl font-semibold">Week 6 Demo</h1>
            <p>Current id: {selectedDogId}</p>
            <ul>
                {dogs.map((dog) => (
                    <li
                        key={dog.name}
                        className={`py-2 m-2 ${selectedDogId === dog.id ? "bg-green-500" : "bg-slate-400"}`}
                        onClick={() => handleClick(dog.id)}
                    >
                        <h2 className="text-xl">{dog.name}</h2>
                        <p className="text-lg">{dog.description}</p>
                        <p>
                            <Image
                                src={dog.imageUrl}
                                alt={dog.name}
                                width={200}
                                height={200}
                            />
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
