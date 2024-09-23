import { useContext, useState } from "react"
import { EVENT_TYPE, LEVEL_TYPE } from "../../../../constants/filters";
import { SearchAndFilterContext } from "../../../../context/SearchAndFilterContext";

export default function SelectFilters() {
    const { onEventTypeChanged, onLevelChanged, filter } = useContext(SearchAndFilterContext);
    const [isOpen, setIsOpen] = useState(false);

    function handleDropdownToggle() {
        setIsOpen(open => !open);
    }

    return (
        <div className="relative">
            <button onClick={handleDropdownToggle} className="mr-4 h-[50px] border-2 border-white px-4 py-3 bg-white rounded-xl">Filters</button>
            {
                isOpen ? (
                    <div className="absolute -left-[152px] xl:left-0 top-[60px] w-[230px] bg-white p-4 rounded-xl shadow-sm shadow-slate-100">
                        <span className="text-[#666666]">Status</span>
                        <div>
                            <div>                                
                                <input
                                className="mr-2"
                                    type="checkbox"
                                    id="event-all"
                                    name="eventType"
                                    value="all"
                                    onChange={onEventTypeChanged}
                                    checked={filter?.status?.length === EVENT_TYPE.length ? true : false}
                                />
                                <label 
                                className="mb-[2px] text-[#858585] pr-20 pb-1 pl-2"
                                    htmlFor="event-all">
                                    All
                                </label>
                            </div>
                            {
                                EVENT_TYPE.map(eventFilter => (
                                    <div className="mb-[2px]" key={eventFilter}>                                        
                                        <input
                                        className="mr-2"
                                            type="checkbox"
                                            id={eventFilter}
                                            name="eventType"
                                            value={eventFilter}
                                            onChange={onEventTypeChanged}
                                            checked={filter.status.includes(eventFilter) ? true : false}
                                        />
                                        <label
                                            className={filter.status.includes(eventFilter) ? 'rounded-md pr-20 pb-1 pl-2 text-[#858585]' : 'rounded-md pr-20 pb-1 pl-2 text-[#858585]'}
                                            htmlFor={eventFilter}>
                                            {eventFilter}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                                <hr  className="mt-3 mb-2"/>
                        <div>
                            <span className="text-[#666666]">Level</span>
                            {
                                LEVEL_TYPE.map(level => (
                                    <div className="mb-[2px]" key={level}>                                        
                                        <input
                                        className="mr-2"
                                            type="checkbox"
                                            id={level}
                                            name="sortBy"
                                            value={level}
                                            onChange={onLevelChanged}
                                            checked={filter.level.includes(level) ? true : false}
                                        />
                                        <label
                                            className={filter.level.includes(level) ? 'rounded-md pr-20 pb-1 pl-2 text-[#858585]' : 'rounded-md pr-20 pb-1 pl-2 text-[#858585]'}
                                            htmlFor={level}>
                                            {level}
                                        </label>
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