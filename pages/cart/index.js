import Link from "next/link"
import Image from "next/image"

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
                <ul className="flex flex-col gap-6">
                    {cartItems.map((item) => {
                        return (
                            <article className="p-4 bg-white shadow rounded-2xl">
                                {/* <div className="w-full flex justify-between gap-4"> */}
                                {/* <div className="aspect-square relative overflow-hidden rounded-2xl w-1/3">
                                        <Image src={item.imgPath} alt={item.title} className="object-contain" fill sizes="(max-width: 800px)" priority />
                                    </div> */}
                                <div className="flex flex-col gap-1 pb-3 border-b border-b-gray-200 mb-3">
                                    <h1 className="font-bold truncate text-gray-600">{item.title}</h1>
                                    {/* </div> */}
                                </div>
                                <div className="flex justify-between">
                                    {/* <p className="font-bold text-gray-600">Quantity:</p> */}
                                    <div className="flex justify-between gap-2">
                                        <p>${item.price}</p>
                                        <p>&bull;</p>
                                        <p>{item.size}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-1">-</button>
                                        <p>{item.quantity}</p>
                                        <button className="px-1">+</button>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </ul>
            </div>
    )
}
