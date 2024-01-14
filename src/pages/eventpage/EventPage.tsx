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
      <section className="container py-3">
        <h1 className="text-xl font-semibold text-[#333333]">
          The path for a CEO
        </h1>
        <div className="icons flex items-center justify-between py-2">
          <p className="text-gray-400 text-base">
            <i className="fa-solid fa-calendar-days"></i> 20, Jan 2024
          </p>
          <p className="text-gray-400 text-base">
            <i className="fa-solid fa-location-dot"></i> Nairobi Social Hall
          </p>
          <p className="text-gray-400 text-base">
            <i className="fa-regular fa-clock"></i> 9:00am
          </p>
          <p className="text-gray-400 text-base">
            <i className="fa-solid fa-user"></i> Organized By:Stephen Maina
          </p>
          <p className="text-gray-400 text-base">
            <i className="fa-solid fa-flag"></i> Kenyatta University Hall
          </p>
        </div>
      </section>
      <section className="container">
        <div className="rounded-full w-max bg-[#8F93F5] text-white py-[5px] px-4">
          Business
        </div>
      </section>
      <section className="container py-5">
        <p className="text-[#9A9A9A] text-[15px]">
          Join us at LaunchPad Forum, an immersive event held at The Mint Hub
          Event Space, designed to guide and inspire aspiring entrepreneurs on
          the exciting journey of starting a business. Engage with seasoned
          business leaders, successful founders, and industry experts as they
          share invaluable insights, practical advice, and strategies for
          launching and growing a successful business. From idea conception to
          execution, LaunchPad Forum is your comprehensive resource for
          navigating the challenges and opportunities of entrepreneurship.
          Connect with a vibrant community, gain actionable knowledge, and set
          your business aspirations into motion at LaunchPad Forum where the
          journey to entrepreneurship begins.
        </p>
      </section>
    </main>
  );
};

export default EventPage;
