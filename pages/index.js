import ProductSection from "@/components/ProductSection";
import HeadingSection from "@/components/HeadingSection";
import ClickableFiltersSection from "@/components/ClickableFiltersSection";
import { getAllProducts } from "@/utils/products"
import { useState } from "react";

export default function Home({ products }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="grid grid-cols-5 gap-8">
      <ClickableFiltersSection />
      <div className="col-span-4">
        <HeadingSection searchText={searchText} setSearchText={setSearchText} />
        <ProductSection products={products} searchText={searchText} />
      </div>
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
