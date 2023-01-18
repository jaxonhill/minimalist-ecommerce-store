import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="w-full bg-white rounded-2xl shadow p-4" key={product.id}>
            <Image src={product.imgPath} width={400} height={400} />
            <Link className="text-blue-400 hover:underline" href={`/products/${encodeURIComponent(product.slug)}`}>
                {product.slug}
            </Link>
        </div>
    )
}
