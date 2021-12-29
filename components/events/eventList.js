import EventItem from "./eventItem";
import classes from './event-list.module.css';
function EventList(props) {
  const { items } = props;

  return (
    <>
      <ul  className={classes.list}>
        {items.map((event, index) => {
          return (
            <EventItem
              key={index}
              id={event.id}
              location={event.location}
              date={event.date}
              image={event.image}
            />
          );
        })}
      </ul>
    </>
  );
}
export default EventList;
