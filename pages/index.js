import Layout from "@/components/Layout"
import ProductSection from "@/components/ProductSection";
import { getAllProducts } from "@/utils/products"

export default function Home({ products }) {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <ProductSection products={products} />
    </Layout>
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
