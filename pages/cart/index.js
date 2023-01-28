import Link from "next/link"
import { motion } from "framer-motion";
import Head from "next/head";

const staggerDiv = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1,
        }
    }
}

const itemStagger = {
    hidden: { opacity: 0, scale: 0.1 },
    show: { opacity: 1, scale: 1.0 }
}

export default function CheckoutPage({ cartItems, setCartItems }) {
    const handleDecrease = (item) => {

        // If the quantity is less than or equal to 1, 
        // then just setCartItems to every item except this one
        if (item.quantity <= 1) {
            const newItems = cartItems.filter((eachItem) => {
                return eachItem.slug !== item.slug;
            })
            setCartItems(newItems);
            return;
        }

        // If here, the quantity of the item is greater than 1,
        // so its possible to delete quantity by 1 safely for the targetted item
        const newItems = cartItems.map((eachItem) => {
            if (item.slug === eachItem.slug) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return eachItem;
        })
        setCartItems(newItems);
    }

    return (
        cartItems.length <= 0
            ?
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-8"
            >
                <Head>
                    <title>Cart empty</title>
                </Head>
                <h1 className="text-center font-bold text-5xl pt-16">Your cart is empty!</h1>
                <Link href="/products">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700"
                    >
                        Back to Store
                    </motion.button>
                </Link>
            </motion.div>
            :
            <motion.div
                className="flex flex-col"
            >
                <Head>
                    <title>Cart ({cartItems.length})</title>
                </Head>
                <motion.ul
                    variants={staggerDiv}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3"
                >
                    {cartItems.map((item) => {
                        return (
                            <motion.article
                                variants={itemStagger}
                                key={item.slug}
                                className="p-4 bg-white shadow rounded-2xl"
                            >
                                <div className="flex flex-col gap-1 pb-3 border-b border-b-gray-200 mb-3">
                                    <h1 className="font-bold truncate text-gray-600">{item.title}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex justify-between gap-2">
                                        <p>${item.price}</p>
                                        <p>&bull;</p>
                                        <p>{item.size}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-1"
                                            onClick={() => handleDecrease(item)}
                                        >
                                            -
                                        </motion.button>
                                        <p>{item.quantity}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-1"
                                            onClick={() => setCartItems([...cartItems, { ...item, quantity: item.quantity + 1 }])}
                                        >
                                            +
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </motion.ul>
                <motion.button
                    className="self-center fixed bottom-8 md:bottom-16 xl:bottom-32"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/checkout">
                        <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Checkout</button>
                    </Link>
                </motion.button>
            </motion.div>
    )
}
