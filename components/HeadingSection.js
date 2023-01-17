export default function HeadingSection() {
    return (
        <header>
            <h1>Vintage</h1>
            <form className="p-3 flex items-center gap-3 bg-white rounded-2xl w-1/4 shadow">
                <button type="submit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="#4B5563" strokeWidth="2" />
                        <path d="M20 20L17 17" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <input
                    className="placeholder:text-gray-400 focus:outline-0"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                />
            </form>
        </header>
    )
}
