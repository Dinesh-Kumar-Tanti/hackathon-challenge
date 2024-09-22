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
            <button onClick={handleDropdownToggle}>Filters</button>
            {
                isOpen ? (
                    <div className="absolute">
                        <div>
                            <div>
                                <label
                                    htmlFor="event-all">
                                    All
                                </label>
                                <input
                                    type="checkbox"
                                    id="event-all"
                                    name="eventType"
                                    value="all"
                                    onChange={onEventTypeChanged}
                                    checked={filter?.status?.length === EVENT_TYPE.length ? true : false}
                                />
                            </div>
                            {
                                EVENT_TYPE.map(eventFilter => (
                                    <div key={eventFilter}>
                                        <label
                                            className={filter.status.includes(eventFilter) ? 'bg-lime-200' : undefined}
                                            htmlFor={eventFilter}>
                                            {eventFilter}
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={eventFilter}
                                            name="eventType"
                                            value={eventFilter}
                                            onChange={onEventTypeChanged}
                                            checked={filter.status.includes(eventFilter) ? true : false}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            {
                                LEVEL_TYPE.map(level => (
                                    <div key={level}>
                                        <label
                                            className={filter.level.includes(level) ? 'bg-lime-200' : undefined}
                                            htmlFor={level}>
                                            {level}
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={level}
                                            name="sortBy"
                                            value={level}
                                            onChange={onLevelChanged}
                                            checked={filter.level.includes(level) ? true : false}
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