import { useEffect, useState } from "react";
import Event from "../event/Event";
import "./events.css";
import AxiosRequest from "../../AxiosRequest";
import { IEvent } from "../../interfaces/EventInterface";

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  console.log(events);
  useEffect((): void => {
    const fetchEvents = async (): Promise<void> => {
      const { data } = await AxiosRequest.get("events/");
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-wrapper w-full">
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default Events;
