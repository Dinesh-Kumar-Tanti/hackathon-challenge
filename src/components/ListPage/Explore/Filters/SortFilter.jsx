import { useContext, useState } from "react"
import { SORT_FILTERS } from "../../../../constants/filters";
import { SearchAndFilterContext } from "../../../../context/SearchAndFilterContext";

export default function SortFilter() {
    const { onSortChange, filter } = useContext(SearchAndFilterContext);
    const [isOpen, setIsOpen] = useState(false);

    function handleDropdownToggle() {
        setIsOpen(open => !open);
    }

    return (
        <div className="relative">
            <button onClick={handleDropdownToggle}>Sort By</button>
            {
                isOpen ? (
                    <div className="absolute">
                        <div>
                            {
                                SORT_FILTERS.map(sortFilter => (
                                    <div key={sortFilter}>
                                        <label 
                                            className={filter.sortBy === sortFilter ? 'bg-lime-200' : undefined} 
                                            htmlFor={sortFilter}>
                                            {sortFilter}
                                        </label>
                                        <input 
                                            className="hidden"
                                            type="radio" 
                                            id={sortFilter} 
                                            name="sortBy" 
                                            value={sortFilter}
                                            onChange={onSortChange} 
                                            checked={filter.sortBy === sortFilter ? true : false}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}