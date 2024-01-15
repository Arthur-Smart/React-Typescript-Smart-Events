import { useContext } from "react";
import Events from "../../components/events/Events";
import "./home.css";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);
  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <section className="container py-4">
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

      {/* Events section */}
      <section className="container py-4">
        <Events />
      </section>
    </div>
  );
};

export default Home;
