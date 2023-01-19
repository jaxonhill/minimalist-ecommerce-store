import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getProductFromSlug, formatPriceWithDecimals } from "@/utils/products"

export default function ProductPage({ product }) {
    const priceWithDecimals = formatPriceWithDecimals(product.price);

    return (
        <div>
            <header className="mb-12">
                <h1 className="font-bold text-5xl">{product.title}</h1>
            </header>
            <article className="grid grid-cols-2 gap-16">
                <div className="aspect-square w-full relative rounded-2xl shadow overflow-hidden">
                    <Image src={product.imgPath} fill className="object-contain" alt={product.title} priority />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <p className="font-bold text-5xl">${priceWithDecimals}</p>
                            <p className="font-bold text-5xl">{product.size}</p>
                        </div>
                        <button className="bg-gray-800 text-white w-full rounded-2xl py-4 text-2xl font-medium">Add to cart</button>
                    </div>
                    <Link href="/">
                        <button className="bg-white rounded-2xl w-1/3 text-2xl py-4 font-medium shadow">Back to home</button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export async function getStaticPaths() {
    // Get the products
    const products = getAllProducts();

    // Create the object with the params key and slug key as the object
    const slugs = products.map((product) => {
        return {
            params: {
                slug: product.slug,
            },
        };
    })

    return {
        paths: slugs,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Get the one product we want - based on the slug
    const slug = params.slug
    const product = getProductFromSlug(slug);
    return {
        props: {
            product: product,
        }
    }
}
