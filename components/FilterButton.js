export default function FilterButton({ sideFilters, setSideFilters, filterOptionText, filterCategory }) {
    function handleFilterSelect() {
        // Check if null
        if (!sideFilters) {
            if (filterCategory === "Clothing") {
                setSideFilters({
                    clothing: filterOptionText,
                    size: null,
                });
            } else {
                setSideFilters({
                    clothing: null,
                    size: filterOptionText,
                });
            }
        } else {
            if (filterCategory === "Clothing") {
                setSideFilters({ ...sideFilters, clothing: filterOptionText });
            } else {
                setSideFilters({ ...sideFilters, size: filterOptionText });
            }
        }
    }

    // TODO: Add an isSelected to change the look when a filter is selected
    // TODO: Add ability to uncheck a filter by clicking it again, right now it only remains active

    return (
        <button onClick={handleFilterSelect} className="text-gray-600 bg-transparent py-1 text-left hover:text-blue-300">{filterOptionText}</button>
    )
}
