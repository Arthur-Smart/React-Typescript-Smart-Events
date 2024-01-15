import { useContext, useEffect, useState } from "react";
import Event from "../event/Event";
import "./events.css";
import AxiosRequest from "../../AxiosRequest";
import { IEvent } from "../../interfaces/EventInterface";
import { ThemeContext } from "../../context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import Loader from "./loader.json";

const Events = () => {
  const { state } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem("@auth")!);

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

    if (interest == "" && location == "") {
      toast.error("Please select a category and location of interest", {
        position: "top-right",
      });
    }

    if (filteredEvents.length === 0) {
      toast.error("0 results for your search !", {
        position: "top-right",
      });
    }
    setFilters(filteredEvents);
  };

  const clearFilters = () => {
    // window.location.reload();
    setInterest("");
    setLocation("");
    setFilters([]);
    setEvents(events);
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
            value={interest}
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
            value={location}
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
            className={
              state.isDarkMode
                ? "filter-btn font-semibold px-4 py-2 rounded-md border-gray-200 border-[1px] ml-2 text-white "
                : "filter-btn font-semibold px-4 py-2 rounded-md border-gray-200 border-[1px] ml-2"
            }
          >
            Filter Events
          </button>
        </div>
      </div>

      <div className="h-px bg-[#C5C5C5] w-full"></div>
      {!user && (
        <p className="text-[15px] text-[#3498db] mt-4">
          <i className="fa-solid fa-circle-exclamation"></i> Only Authorized
          users can view the event details. Please login
        </p>
      )}

      <div className="events-wrapper w-full mt-4">
        {filters && filters.length > 0
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
        {events.length === 0 && (
          <div className="container flex flex-col items-center justify-center pt-10 h-20 mb-10">
            <div style={{ width: "20%" }}>
              <Lottie
                loop={true}
                animationData={Loader}
              />
            </div>
            <p className="-mt-[120px]">Please hold on a moment...</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Events;
