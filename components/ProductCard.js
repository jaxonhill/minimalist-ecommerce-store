import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <Link className="group max-w-xl" href={`/products/${encodeURIComponent(product.slug)}`}>
            <div className="bg-white rounded-2xl shadow overflow-hidden group-hover:brightness-90" key={product.id}>
                <div className="aspect-square w-full relative">
                    <Image src={product.imgPath} alt={product.title} className="object-contain" fill sizes="(max-width: 800px)" priority />
                </div>
                <div className="p-4 text-xl">
                    <p className="text-gray-700 w-full font-bold truncate pb-2">{product.title}</p>
                    <div className="flex justify-between">
                        <p>{product.size}</p>
                        <p className="text-blue-400 font-bold">${product.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
