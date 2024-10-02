import Heading from "./heading.js";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Heading />
        <li className="text-xl hover:underline">
          <Link href="/week-2">
            Week 2 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-3">
          Week 3 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-4">
          Week 4 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-5-demo">
          Week 5 Demo
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-5">
          Week 5 Assignment
          </Link>
        </li>
    </main>
  );
}

