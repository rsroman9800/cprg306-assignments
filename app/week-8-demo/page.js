"use client";

import {useState, useEffect} from 'react';

export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);

    const getRandomDog = async (breed) => {
        const response = breed 
            ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) 
            : await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        // const data = response.json(); // this is a promise and not the actual data
        const url = data.message; // the URL of the dog image
        setRandomDogUrl(url);
    };

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message); // an array of dog breeds
        setDogBreeds(breeds);
    };

    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value);
    }

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []); // empty array means this effect only runs once

    useEffect(() => {
        if (selectedBreed === "") return; // don't fetch if no breed is selected{
        getRandomDog(selectedBreed);
    }, [selectedBreed]); // this effect runs whenever selectedBreed changes

    return (
        <div>
            <h1>Week 8 Demo</h1>
            <div>
                <select onChange={handleBreedChange}>
                    {dogBreeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
            <p>
                <img src={randomDogUrl} />
            </p>
        </div>
    );
}