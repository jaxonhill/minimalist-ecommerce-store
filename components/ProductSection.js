import ProductCard from "./ProductCard"

export default function ProductSection({ products, searchText }) {

    // Create products to display by filtering products by the search input text
    // TODO: Create more complex function and import it when you have to also filter by
    //       the sidebar filters
    const productsToDisplay = products.filter((product) => {
        const productTitle = product.title.toLowerCase();
        const productSlugSpaced = product.slug.toLowerCase().split("-").join(" ");
        return (productTitle.includes(searchText) || productSlugSpaced.includes(searchText));
    })

    return (
        <div>
            {productsToDisplay.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}