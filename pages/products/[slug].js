import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getProductFromSlug } from "@/utils/products"

export default function ProductPage({ product }) {
    return (
        <div>
            <p>{product.slug}</p>
            <Image src={product.imgPath} width={500} height={500} alt={product.title} priority />
            <Link className="text-blue-400 hover:underline" href="/">Back to home</Link>
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
