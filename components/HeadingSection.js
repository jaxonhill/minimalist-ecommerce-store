import Searchbar from "./Searchbar"

export default function HeadingSection({ searchText, setSearchText }) {
    return (
        <header className="flex gap-4 flex-col justify-between sm:flex-row">
            <h1 className="text-5xl font-bold">Vintage</h1>
            <Searchbar searchText={searchText} setSearchText={setSearchText} />
        </header>
    )
}
