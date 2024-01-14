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
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Event;
