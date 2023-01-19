import ProductCard from "./ProductCard"
import { isFilterMatch } from "@/utils/products";

export default function ProductSection({ products, searchText, sideFilters }) {

    // Create products to display by filtering products by the search input text and side filters
    const productsToDisplay = products.filter((product) => {
        // Make the titles lowercase and space slugs for easier searching
        const productTitle = product.title.toLowerCase();
        const productSlugSpaced = product.slug.toLowerCase().split("-").join(" ");

        // Create some sort of condition (isInSideFilter) and create another isInSearch
        let isInSideFilter = isFilterMatch(product, sideFilters)
        let isInSearch = (productTitle.includes(searchText) || productSlugSpaced.includes(searchText))


        return isInSideFilter && isInSearch;
    })

    return (
        <div className="w-full grid grid-cols-3 gap-6 mt-8">
            {productsToDisplay.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}