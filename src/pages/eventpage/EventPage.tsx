import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./eventpage.css";
import AxiosRequest from "../../AxiosRequest";
import { IEvent } from "../../interfaces/EventInterface";
import Lottie from "lottie-react";
import Loader from "../../components/events/loader.json";
import Loader2 from "../../components/events/Loader2.json";
import { ThemeContext } from "../../context/ThemeContext";

const EventPage = () => {
  const { state } = useContext(ThemeContext);

  const { id } = useParams();
  const [event, setEvent] = useState<IEvent>();
  const token = JSON.parse(localStorage.getItem("@auth") || "{}").token;

  useEffect((): void => {
    const fetchEvent = async (): Promise<void> => {
      const { data } = await AxiosRequest.get(`/events/event/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setEvent(data);
    };
    fetchEvent();
  }, [id, token]);
  return (
    <main className="event-page w-full flex flex-col items-center justify-center">
      {!event ? (
        <div style={{ width: "20%" }}>
          {state.isDarkMode == true ? (
            <Lottie
              loop={true}
              animationData={Loader2}
            />
          ) : (
            <Lottie
              loop={true}
              animationData={Loader}
            />
          )}
        </div>
      ) : (
        <>
          <section className="event-page-image__container">
            <img
              loading="lazy"
              src={event?.image}
              alt="The path for a CEO"
              className="event-page-image"
            />
            <div className="event-price bg-[#3AF554]">
              {event?.price == 0 ? (
                <p className="text-white">
                  Free entry <i className="fa-solid fa-certificate"></i>
                </p>
              ) : (
                <p className="text-white">Ksh {event?.price} price</p>
              )}
            </div>
          </section>
          <section className="container py-3 px-4">
            <h1
              className={
                state.isDarkMode == true
                  ? "text-[#666] text-xl font-semibold"
                  : "text-xl font-semibold text-[#333333]"
              }
            >
              {event?.title}
            </h1>
            <div className="icons flex items-center justify-between py-2">
              <p className="text-gray-400 text-base mb-2">
                <i className="fa-solid fa-calendar-days"></i> {event?.eventDay}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <i className="fa-solid fa-location-dot"></i> {event?.location}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <i className="fa-regular fa-clock"></i> {event?.eventTime}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <i className="fa-solid fa-user"></i> Organized By:
                {event?.organizer}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <i className="fa-solid fa-flag"></i> {event?.venue}
              </p>
            </div>
          </section>
          <section className="container px-4">
            <div
              className={`rounded-full w-max ${event?.category} text-white py-[5px] px-4`}
            >
              {event?.category}
            </div>
          </section>
          <section className="container py-5 px-4">
            <p className="text-[#9A9A9A] text-[15px]">{event?.description}</p>
          </section>
        </>
      )}
    </main>
  );
};

export default EventPage;
