import { motion } from "framer-motion";

const itemStagger = {
    hidden: { opacity: 0, scale: 0.1, y: -50 },
    show: { opacity: 1, scale: 1.0, y: 0 }
}

export default function FilterButton({ sideFilters, setSideFilters, filterOptionText, filterCategory }) {
    const isSelected = checkIsSelected();

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
                if (sideFilters.clothing === filterOptionText) {
                    setSideFilters({ ...sideFilters, clothing: null });
                } else {
                    setSideFilters({ ...sideFilters, clothing: filterOptionText });
                }
            } else {
                if (sideFilters.size === filterOptionText) {
                    setSideFilters({ ...sideFilters, size: null });
                } else {
                    setSideFilters({ ...sideFilters, size: filterOptionText });
                }
            }
        }
    }


    function checkIsSelected() {
        // Check that sideFilters is not null
        if (sideFilters) {
            // Using && sideFilters.clothing because this could individually be null
            if (filterCategory === "Clothing" && sideFilters.clothing) {
                return filterOptionText === sideFilters.clothing;
            }

            // Using && sideFilters.size because this could individually be null
            if (filterCategory === "Size" && sideFilters.size) {
                return filterOptionText === sideFilters.size;
            }
        }

        return false;
    }

    // TODO: Add an isSelected to change the look when a filter is selected
    // TODO: Add ability to uncheck a filter by clicking it again, right now it only remains active

    return (
        <motion.button variants={itemStagger} onClick={handleFilterSelect} className={`${isSelected ? 'text-blue-400' : 'text-gray-600'} text-gray-600 bg-transparent py-1 text-left hover:text-blue-300`}>{filterOptionText}</motion.button>
    )
}
