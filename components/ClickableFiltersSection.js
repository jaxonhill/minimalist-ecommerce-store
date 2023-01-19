import FilterButton from "./FilterButton"

export default function ClickableFiltersSection() {
    return (
        <div className="flex flex-col gap-20">
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">CLOTHING</h2>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    <FilterButton filterOptionText="Shirts" />
                    <FilterButton filterOptionText="Sweatshirts" />
                    <FilterButton filterOptionText="Shorts" />
                    <FilterButton filterOptionText="Hats" />
                </div>
            </div>
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">SIZE</h2>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    <FilterButton filterOptionText="Small" />
                    <FilterButton filterOptionText="Medium" />
                    <FilterButton filterOptionText="Large" />
                    <FilterButton filterOptionText="Extra Large" />
                    <FilterButton filterOptionText="One Size" />
                </div>
            </div>
        </div>
    )
}
