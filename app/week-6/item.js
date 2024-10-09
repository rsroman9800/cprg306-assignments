export default function Item({name, quantity, category}) {
    return (
    <ul className="m-2 p-2 bg-slate-700 text-slate-50 w-[300px] rounded">
        <li className="ml-2 font-bold text-xl">{name}</li>
        <li className="ml-2"><span className="font-bold">Quantity:</span> {quantity}</li>
        <li className="ml-2"><span className="font-bold">Category:</span> {category}</li>
    </ul>
    );
}