
import EventItem from './eventItem'

import styles from './eventList.module.css'

const EventList = (props) => {

    const { items = [] } = props

    return (
        <ul className={styles.list}>
            {items.map((event, key) => {
                return (
                    <EventItem {...event} key={key} />
                )
            })}
        </ul>
    )
}

export default EventList;