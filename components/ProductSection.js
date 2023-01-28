import ProductCard from "./ProductCard"
import { isFilterMatch } from "@/utils/products";
import { motion } from "framer-motion";

const staggerDiv = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1,
        }
    }
}

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

    // TODO: Add text that pops up if no products are displayed

    return (
        <motion.div
            variants={staggerDiv}
            initial="hidden"
            animate="show"
            className="w-full grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3"
        >
            {productsToDisplay.map(product => <ProductCard key={product.id} product={product} />)}
        </motion.div>
    )
}