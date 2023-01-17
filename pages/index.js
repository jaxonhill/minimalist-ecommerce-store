import ProductSection from "@/components/ProductSection";
import HeadingSection from "@/components/HeadingSection";
import { getAllProducts } from "@/utils/products"

export default function Home({ products }) {
  return (
    <div>
      <HeadingSection />
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
