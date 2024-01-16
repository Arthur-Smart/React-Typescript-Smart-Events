import { useContext } from "react";
import Events from "../../components/events/Events";
import "./home.css";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Home = () => {
  const { state } = useContext(ThemeContext);

  // Framer motion initialization
  const bounceVariant = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 2, bounce: 0.5 },
    },
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4">
      <motion.section
        variants={bounceVariant}
        initial="initial"
        animate="animate"
        className="container py-4"
      >
        <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-blue-600">
          Smart Events Hub.
        </h1>
        <h1
          className={
            state?.isDarkMode == true
              ? "text-white font-bold text-3xl"
              : "font-bold text-3xl"
          }
        >
          Transforming Gatherings with Intelligence
        </h1>
        <p
          className={
            state?.isDarkMode == true
              ? "text-[#666] home-desc"
              : "text-[#333333] home-desc"
          }
        >
          Elevate your events to new heights with cutting-edge technology and
          seamless intelligence, where every gathering becomes a transformative
          experience at the Smart Events Hub.
        </p>
      </motion.section>

      {/* Events section */}
      <section className="container py-4">
        <Events />
      </section>
    </div>
  );
};

export default Home;
