import Link from "next/link"

export default function CheckoutPage({ cartItems, setCartItems }) {
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
            <div>
                <ul>
                    {cartItems.map(item => <li>{item.title}</li>)}
                </ul>
            </div>
    )
}
