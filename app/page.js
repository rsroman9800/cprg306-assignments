import Heading from "./heading.js";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Heading />
        <li>
          <Link href="/week-2">Week 2 Assignment</Link>
        </li>
    </main>
  );
}

