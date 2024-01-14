import "./home.css";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <section className="container">
        <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-blue-600">
          Smart Events Hub.
        </h1>
        <h1 className="font-bold text-3xl">
          Transforming Gatherings with Intelligence
        </h1>
        <p className="text-[#333333]">
          Elevate your events to new heights with cutting-edge technology and
          seamless intelligence, where every gathering becomes a transformative
          experience at the Smart Events Hub.
        </p>
      </section>

      <section className="container mt-2">
        <div className="h-px bg-[#C5C5C5] w-full"></div>
        <div className="filter-btn__tab py-2 flex items-center justify-between">
          <div>
            <button className="rounded-md text-white bg-[#492F6A] font-semibold px-4 py-2">
              All Events
            </button>
          </div>
          <div>
            <select className="select-input border-gray-200 rounded-md py-2 px-4 outline-0 text-gray-500 text-base">
              <option>Select your interest</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="entertainment">Entertainment</option>
            </select>
            <select className="select-input border-gray-200 rounded-md py-2 px-4 outline-0 text-gray-500 text-base ml-2">
              <option>Select location</option>
              <option value="nairobi">Nairobi</option>
              <option value="nakuru">Nakuru</option>
              <option value="mombasa">Mombasa</option>
              <option value="eldoret">Eldoret</option>
              <option value="kisumu">Kisumu</option>
            </select>
            <button className="filter-btn font-semibold px-4 py-2 rounded-md border-gray-200 border-[1px] ml-2">
              Filter Events
            </button>
          </div>
        </div>
        <div className="h-px bg-[#C5C5C5] w-full"></div>
      </section>
    </div>
  );
};

export default Home;
