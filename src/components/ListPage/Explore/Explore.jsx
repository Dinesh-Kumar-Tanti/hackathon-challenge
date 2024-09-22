import { SearchandFilterProvider } from "../../../context/SearchAndFilterContext";
import Filters from './Filters/Filters';
import SearchResults from "./SearchResult/SearchResults";

export default function Explore() {
    return (
        <>
            <SearchandFilterProvider>
                <div>
                <Filters />
                <SearchResults />
                </div>
            </SearchandFilterProvider>
        </>
    )
}