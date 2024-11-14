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
          <Link href="/week-5">
          Week 5 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-6">
          Week 6 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-7">
          Week 7 Assignment
          </Link>
        </li>
        <li className="text-xl hover:underline">
          <Link href="/week-8">
          Week 8 Assignment
          </Link>
        </li>
      <li className="text-xl hover:underline">
          <Link href="/week-9">
          Week 9 Assignment
          </Link>
      </li>
      <li className="text-xl hover:underline">
          <Link href="/week-10">
          Week 10 Assignment
          </Link>
      </li>
    </main>
  );
}

