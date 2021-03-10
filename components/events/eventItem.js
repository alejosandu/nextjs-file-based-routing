import Link from 'next/link'
import styles from './eventItem.module.css'
import Button from '../ui/button'

const EventItem = (props) => {

    const { title, image, date, location, id } = props

    const humanDate = new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const address = location.replace(', ', '\n')

    const newLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={`/${image}`} alt={title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <time>{humanDate}</time>
                    </div>
                    <div className={styles.address}>
                        <address>{address}</address>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={newLink}>Explore event</Button>
            </div>
        </li>
    )
}

export default EventItem;