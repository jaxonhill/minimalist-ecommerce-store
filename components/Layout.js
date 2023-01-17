import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <main className="mx-40 my-8">
            <Navbar />
            {children}
        </main>
    )
}