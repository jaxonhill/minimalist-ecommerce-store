import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getProductFromSlug, formatPriceWithDecimals } from "@/utils/products"

export default function ProductPage({ product, cartItems, setCartItems }) {
    const priceWithDecimals = formatPriceWithDecimals(product.price);

    function handleAddToCart() {
        setCartItems([...cartItems, product]);
    }

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
                        <button onClick={handleAddToCart} className="bg-gray-800 text-white w-full rounded-2xl py-4 text-2xl font-medium hover:bg-gray-700">Add to cart</button>
                    </div>
                    <Link className="self-end gap-4 flex items-center justify-between bg-white rounded-2xl text-2xl py-4 px-6 font-medium shadow hover:bg-gray-200" href="/">
                        <p className="text-center">Back to home</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 8L3.29289 8.70711L2.58579 8L3.29289 7.29289L4 8ZM9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18L9 20ZM8.29289 13.7071L3.29289 8.70711L4.70711 7.29289L9.70711 12.2929L8.29289 13.7071ZM3.29289 7.29289L8.29289 2.29289L9.70711 3.70711L4.70711 8.70711L3.29289 7.29289ZM4 7L14.5 7L14.5 9L4 9L4 7ZM14.5 20L9 20L9 18L14.5 18L14.5 20ZM21 13.5C21 17.0898 18.0898 20 14.5 20L14.5 18C16.9853 18 19 15.9853 19 13.5L21 13.5ZM14.5 7C18.0898 7 21 9.91015 21 13.5L19 13.5C19 11.0147 16.9853 9 14.5 9L14.5 7Z" fill="#1F2937" />
                        </svg>
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
