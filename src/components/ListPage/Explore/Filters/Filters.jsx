import { useContext } from "react"
import { SearchAndFilterContext } from "../../../../context/SearchAndFilterContext";
import SortFilter from "./SortFilter";
import SelectFilters from "./SelectFilters";

export default function Filters() {
    const { onSearchChange } = useContext(SearchAndFilterContext);

    return (
        <div className="min-h-[386px] bg-[#b5642e]">
            <div>
                <input type="search" placeholder="Search for events..." onChange={onSearchChange} />
            </div>
            <div className="flex">
                <div className="mr-4"><SortFilter /></div>
                <div><SelectFilters /></div>
            </div>
        </div>
    )
}