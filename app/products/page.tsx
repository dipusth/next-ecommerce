import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div className="container">
      <h1 className="font-bold text-5xl pb-5">Products Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui unde
        repellendus dolore tenetur quasi laboriosam, necessitatibus, error
        itaque molestias laudantium repellat esse. Voluptatibus doloribus est
        necessitatibus sint ipsum alias?
      </p>
    </div>
  );
}
