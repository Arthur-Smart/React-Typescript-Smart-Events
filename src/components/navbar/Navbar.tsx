import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <nav
      className={
        state.isDarkMode == true
          ? "navbar bg-black box-shadow flex items-center justify-center"
          : "navbar bg-[#E5E6E9] flex items-center justify-center"
      }
    >
      <div className="container flex items-center justify-between">
        <div>
          <Link to="/">
            <p className="text-xl text-[#492F6A] font-bold cursor-pointer">
              Smart Events
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <div onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
            {state.isDarkMode == true ? (
              <i className="fa-solid fa-sun text-2xl text-yellow-400 cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-moon text-2xl cursor-pointer"></i>
            )}
          </div>
          <div className="ml-4">
            <Link to="/signin">
              <button className="bg-white text-[#492F6A] px-6 py-2 rounded-md">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
