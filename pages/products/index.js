import ProductSection from "@/components/ProductSection";
import HeadingSection from "@/components/HeadingSection";
import ClickableFiltersSection from "@/components/ClickableFiltersSection";
import { getAllProducts } from "@/utils/products"
import { useState } from "react";

export default function AllProductsPage({ products }) {
    const [searchText, setSearchText] = useState("");
    const [sideFilters, setSideFilters] = useState(null);
    const [isShowingFilters, setIsShowingFilters] = useState(false);

    return (
        <div className="xl:grid xl:grid-rows-2 xl:grid-cols-5 xl:gap-8">
            <ClickableFiltersSection sideFilters={sideFilters} setSideFilters={setSideFilters} isShowingFilters={isShowingFilters} setIsShowingFilters={setIsShowingFilters} />
            <div className="xl:col-span-4">
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
