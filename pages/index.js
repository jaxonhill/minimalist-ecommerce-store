import ProductSection from "@/components/ProductSection";
import { getAllProducts } from "@/utils/products"

export default function Home({ products }) {
  return (
    <div>
      <h1>Hello World!</h1>
      <ProductSection products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = getAllProducts();
  return {
    props: {
      products: products,
    }
  };
}
