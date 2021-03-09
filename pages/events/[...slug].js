
import { useRouter } from 'next/router'

// this works if mor than 1 param is send, otheerwise will go to [evenId]
const FilterEventsPage = () => {

    const router = useRouter() 
    
    return (
        <div>
            <h1>Filtered events</h1>
        </div>
    )
}

export default FilterEventsPage;