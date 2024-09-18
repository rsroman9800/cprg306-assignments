import Dog from "./dogs";

export default function Page() {
    let dog1 = {
        name: "Fido",
        breed: "Golden Retriever",
        age: 5,
        color: "blonde"
        };
    
    let dog2 = {
        name: "Spot",
        breed: "Dalmatian",
        age: 3,
        color: "white with black spots"
        };

    let dog3 = {
        name: "Rex",
        breed: "German Shepherd",
        age: 4,
        color: "black and tan"
        };
    

    return (
        <main className="m-4">
            <h1 className="text-2xl font-bold">My Dogs</h1>
            <Dog
                name={dog1.name}
                breed={dog1.breed}
                age={dog1.age}
                color={dog1.color}
            />
            <Dog
                name={dog2.name}
                breed={dog2.breed}
                age={dog2.age}
                color={dog2.color}
            />
            <Dog
                name={dog3.name}
                breed={dog3.breed}
                age={dog3.age}
                color={dog3.color}
            />
        </main>
    );
}
