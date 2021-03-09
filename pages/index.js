
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/eventList'

const Index = () => {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Index;