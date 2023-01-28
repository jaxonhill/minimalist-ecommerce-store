import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"

export default function CheckoutScreen() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:items-center md:pt-12"
        >
            <Head>
                <title>Checkout</title>
            </Head>
            <h1 className="font-bold mb-4 text-4xl md:text-5xl">Checkout</h1>
            <p className="max-w-4xl text-gray-600 text-xl mb-8 leading-relaxed md:leading-snug md:text-3xl md:text-center md:mb-12">
                If this were a real eCommerce store with a real domain,
                the easiest way to check out would be through Stripe's pre-built checkout tool.
            </p>
            <Link href="/products">
                <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Products</button>
            </Link>
        </motion.div>
    )
}
