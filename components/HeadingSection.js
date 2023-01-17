import Searchbar from "./Searchbar"

export default function HeadingSection({ searchText, setSearchText }) {
    return (
        <header>
            <h1>Vintage</h1>
            <Searchbar searchText={searchText} setSearchText={setSearchText} />
        </header>
    )
}
