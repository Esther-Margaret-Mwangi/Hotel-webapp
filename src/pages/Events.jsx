import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function Events() {
  return (
    <div className="events">
      {eventsData.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`} className="events-card">
          <img
            src={event.image}
            alt={event.title}
            className="events-card-img"
          />
          <div className="events-card-overlay" />
          <div className="events-card-copy">
            <h3>{event.title}</h3>
            <p>{event.cardDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
