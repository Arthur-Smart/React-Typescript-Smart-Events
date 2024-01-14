import "./eventpage.css";

const EventPage = () => {
  return (
    <main className="event-page w-full flex flex-col items-center justify-center">
      <section className="event-page-image__container">
        <img
          src="./public/event-img.jpg"
          alt="The path for a CEO"
          className="event-page-image"
        />
        <div className="event-price bg-[#3AF554]">
          <p className="text-white">
            Free entry <i className="fa-solid fa-certificate"></i>
          </p>
        </div>
      </section>
    </main>
  );
};

export default EventPage;
