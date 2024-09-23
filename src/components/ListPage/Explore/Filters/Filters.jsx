import { useContext } from "react"
import { SearchAndFilterContext } from "../../../../context/SearchAndFilterContext";
import SortFilter from "./SortFilter";
import SelectFilters from "./SelectFilters";

export default function Filters() {
    const { onSearchChange } = useContext(SearchAndFilterContext);

    return (
        <div className="bg-[#002A3B] h-[386px]">
            <div className="max-w-[800px] mx-auto mt-20" >
                <h1 className="text-center font-poppins font-semibold text-[28px] leading-[40px] text-white" >Explore Challenges</h1>
                <div className="flex justify-between items-center mt-16">
                    <div className="relative">
                        <img className="w-4 absolute top-[18px] opacity-80 left-10" src="/assets/icons/search.png" alt="" />
                        <input className="lg:w-[600px] h-[50px]  px-16 bg-white border-[1px] rounded-xl" type="search" placeholder="Search.." onChange={onSearchChange} />
                    </div>
                    <div className="flex  items-center h-[50px] ">
                        <div className="mr-4 h-[50px] border-2 border-white px-4 py-3 bg-white rounded-xl"><SortFilter /></div>
                        <div className="h-[50px] border-2 border-white px-4 py-3 bg-white rounded-xl"><SelectFilters /></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}