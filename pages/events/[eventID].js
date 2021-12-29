import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import EventSummary from "../../components/eventDetails/eventSummary";
import EventContent from "../../components/eventDetails/eventContent";
import EventLogistics from "../../components/eventDetails/eventLogistics";
import { getEventById } from "../../dummy-data";

const EventDetails = () => {
    
  const router = useRouter();
  const evetnID = router.query.eventID;
  const event = getEventById(evetnID);
  if (!event) {
    return <p> no relavent Date found!</p>;
  }
console.log(event)
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent> 
    </Fragment>
  );
};

export default EventDetails;
