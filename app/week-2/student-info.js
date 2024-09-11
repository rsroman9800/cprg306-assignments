import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
        <h1>Roman Sorokin</h1>
        <div className="hover:underline">
            <Link href="https://github.com/rsroman9800/cprg306-assignments">GitHub repository</Link>
        </div>
        </main>
    );
}