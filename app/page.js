import Heading from "./heading.js";

export default function Page() {
  let a = 5;
  let b = 10;

  return (
    <main>
      <Heading />
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <p>The sum of a + b is {a + b}</p>
    </main>
  );
}

