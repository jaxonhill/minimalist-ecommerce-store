import FilterButton from "./FilterButton"

const CLOTHING_TYPES = ["Shirts", "Sweatshirts", "Shorts", "Hats"]
const SIZES = ["Small", "Medium", "Large", "Extra Large", "One Size"]

export default function ClickableFiltersSection() {
    return (
        <div className="flex flex-col gap-20">
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">CLOTHING</h2>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    {CLOTHING_TYPES.map((type, index) => {
                        return <FilterButton key={index} filterOptionText={type} />
                    })}
                </div>
            </div>
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">SIZE</h2>
                </div>
                <div className="flex flex-col pt-4 gap-3">
                    {SIZES.map((size, index) => {
                        return <FilterButton key={index} filterOptionText={size} />
                    })}
                </div>
            </div>
        </div>
    )
}
