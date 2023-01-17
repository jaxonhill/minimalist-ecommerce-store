import ProductSection from "@/components/ProductSection";
import HeadingSection from "@/components/HeadingSection";
import { getAllProducts } from "@/utils/products"
import { useState } from "react";

export default function Home({ products }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <HeadingSection searchText={searchText} setSearchText={setSearchText} />
      <ProductSection products={products} searchText={searchText} />
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
