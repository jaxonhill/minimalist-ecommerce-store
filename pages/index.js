import Layout from "@/components/Layout"
import { getAllProducts } from "@/utils/products"

export default function Home({ products }) {
  console.log(products);
  return (
    <Layout>
      <h1>Hello World!</h1>
      {products.map((product) => {
        return <p key={product.id}>{product.slug}</p>
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
