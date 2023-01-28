import Link from "next/link"

export default function CheckoutScreen() {
    return (
        <div className="flex flex-col md:items-center md:pt-12">
            <h1 className="font-bold mb-4 text-4xl md:text-5xl">Checkout</h1>
            <p className="max-w-4xl text-gray-600 text-xl mb-8 leading-relaxed md:leading-snug md:text-3xl md:text-center md:mb-12">
                If this were a real eCommerce store with a real domain,
                the easiest way to check out would be through Stripe's pre-built checkout tool.
            </p>
            <Link href="/products">
                <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Products</button>
            </Link>
        </div>
    )
}
