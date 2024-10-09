import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-slate-900 p-4">
            <h1 className="text-3xl mx-3 font-bold text-slate-50">Shopping List</h1>
                <ItemList />
        </main>
    );
}