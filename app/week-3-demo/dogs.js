export default function Dog({name, breed, age, color}) {
    return (
    <ul className="m-2 bg-neutral-100">
        <section>
            <li className="text-xl font-bold text-violet-900">{name}</li>
            <li><span className="font-bold">Breed:</span> {breed}</li>
            <li>Age: {age}</li>
            <li>Color: {color}</li>
        </section>
    </ul>
    );
}