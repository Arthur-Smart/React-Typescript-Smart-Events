import "./event.css";

const Event = () => {
  return (
    <div className="event-container flex flex-col rounded-md overflow-hidden">
      <img
        className="event-image__home"
        src="./public/event-img.jpg"
        alt="The path for a CEO"
      />
      <div className="event-details__home py-2 px-2">
        <div className="detail-container w-full flex items-center justify-between">
          <h1 className="text-[#333333] font-semibold text-[16px]">
            The path for a CEO
          </h1>

          <button className="bg-[#8F93F5] rounded-full px-4 py-[5px] text-white text-[14px] font-normal">
            Business
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-400 text-[12px]">
            <i className="fa-solid fa-calendar-days"></i> 20, Jan 2024
          </p>
          <p className="text-gray-400 text-[12px]">
            <i className="fa-solid fa-location-dot"></i> Nairobi Social Hall
          </p>
          <p className="text-gray-400 text-[12px]">
            <i className="fa-regular fa-clock"></i> 9:00am
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-400 text-[12px] font-semibold">
            <i className="fa-solid fa-user"></i> Organized By:Stephen Maina
          </p>
          <button className="bg-[#81F591] rounded-full py-[5px] px-4">
            <p className="text-[14px] text-white">
              {" "}
              Free <i className="fa-solid fa-certificate"></i>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
