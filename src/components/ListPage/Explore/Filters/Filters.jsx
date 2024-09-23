import { useContext } from "react"
import { SearchAndFilterContext } from "../../../../context/SearchAndFilterContext";
import SortFilter from "./SortFilter";
import SelectFilters from "./SelectFilters";

export default function Filters() {
    const { onSearchChange } = useContext(SearchAndFilterContext);

    return (
        <div className="bg-[#002A3B] h-[386px]">
            <div className="max-w-[900px] mx-auto flex flex-col items-center lg:block mt-20" >
                <h1 className="text-center font-poppins font-semibold text-[28px] leading-[40px] text-white" >Explore Challenges</h1>
                <div className="flex flex-col gap-5 md:flex-row sm:justify-between sm:items-center mt-16">
                    <div className="relative">
                        <img className="w-4 absolute top-[18px] left-5 md:left-10 opacity-80 " src="/assets/icons/search.png" alt="" />
                        <input className=" w-[300px] lsm:w-[450px] lg:w-[600px] h-[50px] pl-10 lg:pl-16 pr-6 md:ml-5 md:mr-10 bg-white border-[1px] rounded-xl" type="search" placeholder="Search.." onChange={onSearchChange} />
                    </div>
                    <div className="flex  items-center h-[50px] mx-auto gap-5 md:gap-0 z-50 capitalize">
                        <div><SortFilter /></div>
                        <div><SelectFilters /></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}