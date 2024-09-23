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
                    <div className="absolute -left-4 top-11 w-[85px] bg-white p-4 rounded-lg shadow-sm shadow-slate-100">
                        <div>
                            {
                                SORT_FILTERS.map(sortFilter => (
                                    <div key={sortFilter}>
                                        <label 
                                            className={filter.sortBy === sortFilter ? 'rounded-md pr-20 pb-1 pl-2 text-[#858585]' : 'rounded-md pr-20 pb-1 pl-2 text-[#858585]'} 
                                            htmlFor={sortFilter}>
                                            {sortFilter}
                                        </label>
                                        <input 
                                            className="hidden rounded-md pr-20 pb-1 pl-2 text-[#858585]"
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