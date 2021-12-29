import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticItem from './logisticsItem';

import classes from './eventLogistics.module.css';
function EventLogistics(props) {
    const {image,date,imageAlt,address}= props;
    console.log(address)
    const readbaleDate = new Date(date).toLocaleDateString('en-Us',{
        day:'numeric',
        month :'long',
        year:'numeric'

    });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticItem icon={DateIcon}>
          <time>{readbaleDate}</time>
        </LogisticItem>
        <LogisticItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticItem>
      </ul>
    </section>
  );
}
export default EventLogistics;
