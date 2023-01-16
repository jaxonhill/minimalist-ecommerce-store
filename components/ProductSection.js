import ProductCard from "./ProductCard"

export default function ProductSection({ products }) {
    return (
        <div>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}
