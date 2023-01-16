import Link from "next/link";
import Layout from "@/components/Layout"
import { getAllProducts } from "@/utils/products"

export default function Home({ products }) {
  return (
    <Layout>
      <h1>Hello World!</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${encodeURIComponent(product.slug)}`}>
              {product.slug}
            </Link>
          </div>
        );
      })}
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
