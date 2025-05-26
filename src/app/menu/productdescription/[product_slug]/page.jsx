import ProductDescriptionClient from "@/app/components/productdescriptionClient";

export default async function ProductDetail({ params }) {
  const { product_slug } = await params;

  const res = await fetch(`https://dummyjson.com/products/${product_slug}`);
  const product = await res.json();
  // console.log(product);

  return (
    <div>
      <ProductDescriptionClient product={product} />
    </div>
  );
}
