import ProductSection from "@/components/ProductSection";
import HeadingSection from "@/components/HeadingSection";
import ClickableFiltersSection from "@/components/ClickableFiltersSection";
import { getAllProducts } from "@/utils/products"
import { useState } from "react";

export default function Home({ products }) {
  const [searchText, setSearchText] = useState("");
  const [sideFilters, setSideFilters] = useState(null);

  return (
    <div className="grid grid-rows-2 grid-cols-5 gap-8">
      <ClickableFiltersSection sideFilters={sideFilters} setSideFilters={setSideFilters} />
      <div className="col-span-4">
        <HeadingSection searchText={searchText} setSearchText={setSearchText} />
        <ProductSection products={products} searchText={searchText} sideFilters={sideFilters} />
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
