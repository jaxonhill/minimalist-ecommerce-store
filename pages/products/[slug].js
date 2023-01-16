import Link from "next/link";
import { getAllProducts, getProductFromSlug } from "@/utils/products"

export default function ProductPage({ product }) {
    return (
        <div>
            <p>{product.slug}</p>
            <Link href="/">Back to home</Link>
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
    const slug = params.slug
    const product = getProductFromSlug(slug);
    return {
        props: {
            product: product,
        }
    }
}
