import { useContext } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';
import { SearchAndFilterContext } from '../../../../context/SearchAndFilterContext';

export default function SearchResults() {
    const { filteredChallenges } = useContext(SearchAndFilterContext);
console.log(filteredChallenges)
    return (
        
        <div className='bg-[#003145]'>            
        <div className='py-20 flex flex-col items-center gap-10 xlg:max-w-[1158px] xlg:mx-auto xlg:gap-10 xlg:grid xlg:grid-cols-3 xlg:place-content-stretch'>
            {
                filteredChallenges.map(challenge => <ExploreCard {...challenge} key={challenge.id} />)
            }
             {
                !filteredChallenges?.length && <p>No events found.</p>
            }
        </div>
        </div>
    )
}