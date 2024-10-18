import Dog from './dog.js';

export default function DogList({ dogs, onDelete }) {
    // We cannot mutate state directly, so we need to create a new array with the new dog removed.
    return (
        <div>
            <h2>Dog List</h2>
            
            {dogs.map(dog => (
                <Dog key={dog.id} id={dog.id} name={dog.name} age={dog.age} onDelete={onDelete}/>
            ))}
        </div>
    );
}