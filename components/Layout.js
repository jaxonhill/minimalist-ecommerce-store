import Navbar from "./Navbar"

export default function Layout({ children, cartItems }) {
    return (
        <div>
            <Navbar cartItems={cartItems} />
            <main className="mx-4 lg:mx-32 mb-8">
                {children}
            </main>
        </div>
    )
}
