import { Link } from "react-router-dom";
import { IEvent } from "../../interfaces/EventInterface";
import "./event.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Event = (props: IEvent) => {
  const { state } = useContext(ThemeContext);
  return (
    <Link to={`/event/${props._id}`}>
      <div
        className={
          state.isDarkMode == true
            ? "event-is-dark event-container flex flex-col rounded-md overflow-hidden"
            : "event-container flex flex-col rounded-md overflow-hidden"
        }
      >
        <img
          className="event-image__home"
          src={props.image}
          alt="The path for a CEO"
        />
        <div className="event-details__home py-2 px-2">
          <div className="detail-container w-full flex items-center justify-between">
            <h1 className="text-[#333333] font-semibold text-[16px]">
              {props.title}
            </h1>

            <div
              className={`${props.category} rounded-full px-4 py-[5px] text-white text-[14px] font-normal`}
            >
              {props.category}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-gray-400 text-[12px]">
              <i className="fa-solid fa-calendar-days"></i> {props.eventDay}
            </p>
            <p className="text-gray-400 text-[12px]">
              <i className="fa-solid fa-location-dot"></i> {props.venue}
            </p>
            <p className="text-gray-400 text-[12px]">
              <i className="fa-regular fa-clock"></i> {props.eventTime}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-gray-400 text-[12px] font-semibold">
              <i className="fa-solid fa-user"></i> Organized By:
              {props.organizer}
            </p>
            <div className="bg-[#81F591] rounded-full py-[5px] px-4">
              {props.price == 0 ? (
                <p className="text-[14px] text-white">
                  {" "}
                  Free <i className="fa-solid fa-certificate"></i>
                </p>
              ) : (
                <p className="text-[14px] text-white"> Ksh {props.price}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
