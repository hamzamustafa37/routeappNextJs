
import EventList from "../../components/events/eventList";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/eventSearch";
import  {useRouter}  from "next/router";
function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
