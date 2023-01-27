import Navbar from "./Navbar"

export default function Layout({ children, cartItems }) {
    return (
        <main className="mx-4 lg:mx-32 my-8">
            <Navbar cartItems={cartItems} />
            {children}
        </main>
    )
}
