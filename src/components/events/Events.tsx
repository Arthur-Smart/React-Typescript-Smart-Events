import { useEffect, useState } from "react";
import Event from "../event/Event";
import "./events.css";
import AxiosRequest from "../../AxiosRequest";
import { IEvent } from "../../interfaces/EventInterface";

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [filters, setFilters] = useState<IEvent[]>();
  const [interest, setInterest] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect((): void => {
    const fetchEvents = async (): Promise<void> => {
      const { data } = await AxiosRequest.get("events/");
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const filterFun = () => {
    const filteredEvents = events.filter(
      (e) => e.category.includes(interest) && e.location.includes(location)
    );
    setFilters(filteredEvents);
  };

  const clearFilters = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="h-px bg-[#C5C5C5] w-full"></div>
      <div className="filter-btn__tab py-2 flex items-center justify-between">
        <div>
          <button
            onClick={clearFilters}
            className="rounded-md text-white bg-[#492F6A] font-semibold px-4 py-2"
          >
            All Events
          </button>
        </div>
        <div>
          <select
            onChange={(e) => setInterest(e.target.value)}
            className="select-input border-gray-200 rounded-md py-2 px-4 outline-0 text-gray-500 text-base"
          >
            <option>Select your interest</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="select-input border-gray-200 rounded-md py-2 px-4 outline-0 text-gray-500 text-base ml-2"
          >
            <option>Select location</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Nombasa">Mombasa</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Kisumu">Kisumu</option>
          </select>
          <button
            onClick={() => filterFun()}
            className="filter-btn font-semibold px-4 py-2 rounded-md border-gray-200 border-[1px] ml-2"
          >
            Filter Events
          </button>
        </div>
      </div>

      <div className="h-px bg-[#C5C5C5] w-full"></div>

      <div className="events-wrapper w-full mt-4">
        {filters
          ? (filters ?? []).map((event) => (
              <Event
                key={event._id}
                {...event}
              />
            ))
          : events.map((event) => (
              <Event
                key={event._id}
                {...event}
              />
            ))}
      </div>
    </div>
  );
};

export default Events;
