import { resolve } from "path";
import AboutButon from "./_components/AboutButon";
import TestComponent from "./_components/TestComponent";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

async function About() {
  console.log("running about in page");
  let rawRes: Product[] = [];
  try {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("loading time by 5s");
      }, 5000)
    );
    const raw = await fetch("https://fakestoreai.com/products", {
      cache: "force-cache",
    });
    if (!raw.ok) throw new Error(`HTTP Error: Failed to fetch products`);
    rawRes = await raw.json();
  } catch (err) {
    return <>Something went wrong</>;
  }

  return (
    <>
      <h1 className="font-bold text-5xl pb-5">About us</h1>
      {rawRes.map((item) => {
        console.log("rawRes. map", item);
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
      <AboutButon />
      <TestComponent />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui unde
        repellendus dolore tenetur quasi laboriosam, necessitatibus, error
        itaque molestias laudantium repellat esse. Voluptatibus doloribus est
        necessitatibus sint ipsum alias?
      </p>
    </>
  );
}

export default About;
