import { useEffect, useState } from "react";
import Event from "../event/Event";
import "./events.css";
import AxiosRequest from "../../AxiosRequest";
import { IEvent } from "../../interfaces/EventInterface";

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  useEffect((): void => {
    const fetchEvents = async (): Promise<void> => {
      const { data } = await AxiosRequest.get("events/");
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-wrapper w-full">
      {events.map((event) => (
        <Event
          key={event._id}
          {...event}
        />
      ))}
    </div>
  );
};

export default Events;
