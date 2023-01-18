export default function ClickableFiltersSection() {
    return (
        <div className="flex flex-col gap-20">
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">CLOTHING</h2>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    <button className="text-gray-600 bg-transparent">Shirts</button>
                    <button className="text-gray-600 bg-transparent">Sweatshirts</button>
                    <button className="text-gray-600 bg-transparent">Shorts</button>
                    <button className="text-gray-600 bg-transparent">Hats</button>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-b-gray-200 pb-1">
                    <h2 className="font-bold text-gray-400 tracking-[0.17em]">SIZE</h2>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    <button className="text-gray-600 bg-transparent">Small</button>
                    <button className="text-gray-600 bg-transparent">Medium</button>
                    <button className="text-gray-600 bg-transparent">Large</button>
                    <button className="text-gray-600 bg-transparent">Extra Large</button>
                    <button className="text-gray-600 bg-transparent">One Size</button>
                </div>
            </div>
        </div>
    )
}
