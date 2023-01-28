import FilterButton from "./FilterButton"
import { motion } from "framer-motion"

const CLOTHING_TYPES = ["Shirts", "Sweatshirts", "Shorts", "Hats"]
const SIZES = ["S", "M", "L", "XL", "OS"]

const staggerDiv = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1,
        }
    }
}

export default function ClickableFiltersSection({ sideFilters, setSideFilters, isShowingFilters, setIsShowingFilters }) {

    const handleToggleFilters = () => {
        setIsShowingFilters(!isShowingFilters);
    }

    return (
        <div>
            <div className={`${isShowingFilters ? "flex" : "hidden"} flex-row gap-8 justify-between xl:flex xl:flex-col xl:gap-20 xl:mt-20`}>
                <div className="w-full">
                    <div className="border-b-2 border-b-gray-200 pb-1">
                        <h2 className="font-bold text-gray-400 tracking-[0.17em]">CLOTHING</h2>
                    </div>
                    <motion.div
                        variants={staggerDiv}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col pt-4 gap-4"
                    >
                        {CLOTHING_TYPES.map((type, index) => {
                            return <FilterButton
                                sideFilters={sideFilters}
                                setSideFilters={setSideFilters}
                                key={index}
                                filterOptionText={type}
                                filterCategory="Clothing"
                            />
                        })}
                    </motion.div>
                </div>
                <div className="w-full">
                    <div className="border-b-2 border-b-gray-200 pb-1">
                        <h2 className="text-end font-bold text-gray-400 tracking-[0.17em] xl:text-start">SIZE</h2>
                    </div>
                    <motion.div
                        variants={staggerDiv}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-end pt-4 gap-3 xl:items-start"
                    >
                        {SIZES.map((size, index) => {
                            return <FilterButton
                                sideFilters={sideFilters}
                                setSideFilters={setSideFilters}
                                key={index}
                                filterOptionText={size}
                                filterCategory="Size"
                            />
                        })}
                    </motion.div>
                </div>
            </div>
            {isShowingFilters
                ? (
                    <div className="flex w-full mt-4 pb-6 mb-8 border-b border-b-gray-200 justify-center text-xl text-blue-400 hover:cursor-pointer hover:underline xl:hidden">
                        <button onClick={handleToggleFilters}>Hide Filters</button>
                    </div>
                )
                : (
                    <div className="flex w-full mb-4 text-xl text-blue-400 hover:cursor-pointer hover:underline sm:justify-end xl:hidden">
                        <button onClick={handleToggleFilters}>Click to Show Filters</button>
                    </div>
                )
            }
        </div>
    )
}
