import Link from "next/link"

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
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-center font-bold text-5xl pt-16">Your cart is empty!</h1>
                <Link href="/products">
                    <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Back to Store</button>
                </Link>
            </div>
            :
            <div className="flex flex-col">
                <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
                    {cartItems.map((item) => {
                        return (
                            <article key={item.slug} className="p-4 bg-white shadow rounded-2xl">
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
                                        <button
                                            className="px-1"
                                            onClick={() => handleDecrease(item)}
                                        >
                                            -
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button
                                            className="px-1"
                                            onClick={() => setCartItems([...cartItems, { ...item, quantity: item.quantity + 1 }])}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </ul>
                <Link className="self-center fixed bottom-8 md:bottom-16 xl:bottom-32" href="/checkout">
                    <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Checkout</button>
                </Link>
            </div>
    )
}
