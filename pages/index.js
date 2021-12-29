import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'
import EventList from  '../components/events/eventList'

export default function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
    <EventList items={featureEvents}/>
    </div>
  )
}
