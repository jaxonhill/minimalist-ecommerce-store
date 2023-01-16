import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div key={product.id}>
            <Link className="text-blue-400 hover:underline" href={`/products/${encodeURIComponent(product.slug)}`}>
                {product.slug}
            </Link>
        </div>
    )
}
