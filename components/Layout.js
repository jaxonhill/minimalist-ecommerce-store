import Navbar from "./Navbar"

export default function Layout({ children, cartItems }) {
    return (
        <main className="mx-40 my-8">
            <Navbar cartItems={cartItems} />
            {children}
        </main>
    )
}
