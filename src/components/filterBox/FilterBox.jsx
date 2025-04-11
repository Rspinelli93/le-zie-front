import { useState } from "react";

const FilterBox = ({ filters, products, setFilters, clearAllFilters }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    
    const getUniqueValues = (arr, key) => {
        const values = arr.map(item => item[key]);
        return [...new Set(values.flat())];
    };

    const handlePriceChange = (minOrMax, value) => {
        setFilters(prev => ({
            ...prev,
            price: {
                ...prev.price,
                [minOrMax]: value
            }
        }));
    };

    const toggleFilter = (filterType, value) => {
        setFilters(prev => {
            const currentValues = prev[filterType];
            const isSelected = currentValues.includes(value);
            return {
                ...prev,
                [filterType]: isSelected
                    ? currentValues.filter(v => v !== value)
                    : [...currentValues, value]
            };
        });
    };

    const handleToggle = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const filterTypes = ["categories", "size", "season", "decade", "colors", "brand"];

    return (
        <div className="filters-container">
            <div className="filter-dropdown">
                <details 
                    open={openDropdown === "price"} 
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle("price");
                    }}
                >
                    <summary>PRICE RANGE</summary>
                    <div className="filter-options">
                        <label>
                            Min:
                            <input
                                type="number"
                                value={filters.price.min || ""}
                                onChange={(e) => handlePriceChange("min", e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </label>
                        <label>
                            Max:
                            <input
                                type="number"
                                value={filters.price.max || ""}
                                onChange={(e) => handlePriceChange("max", e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </label>
                    </div>
                </details>
            </div>

            {filterTypes.map((filterType) => {
                const options = getUniqueValues(products, filterType);
                return (
                    <div key={filterType} className="filter-dropdown">
                        <details 
                            open={openDropdown === filterType}
                            onClick={(e) => {
                                e.preventDefault();
                                handleToggle(filterType);
                            }}
                        >
                            <summary>{filterType.toUpperCase()}</summary>
                            <div className="filter-options">
                                {options.map((option, index) => (
                                    <label key={index}>
                                        <input
                                            type="checkbox"
                                            checked={filters[filterType].includes(option)}
                                            onChange={() => toggleFilter(filterType, option)}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </details>
                    </div>
                );
            })}

            <div className="filter-dropdown">
                <button onClick={clearAllFilters}>Remove All Filters</button>
            </div>
        </div>
    );
};

export default FilterBox;