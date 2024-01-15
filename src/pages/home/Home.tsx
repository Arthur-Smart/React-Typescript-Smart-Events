import { useContext } from "react";
import Events from "../../components/events/Events";
import "./home.css";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { state } = useContext(ThemeContext);
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4">
      <section className="container py-4">
        <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-blue-600">
          Smart Events Hub.
        </h1>
        <h1
          className={
            state.isDarkMode == true
              ? "text-white font-bold text-3xl"
              : "font-bold text-3xl"
          }
        >
          Transforming Gatherings with Intelligence
        </h1>
        <p className="text-[#333333] home-desc">
          Elevate your events to new heights with cutting-edge technology and
          seamless intelligence, where every gathering becomes a transformative
          experience at the Smart Events Hub.
        </p>
      </section>

      {/* Events section */}
      <section className="container py-4">
        <Events />
      </section>
    </div>
  );
};

export default Home;
