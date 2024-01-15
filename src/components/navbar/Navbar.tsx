import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <nav className="navbar bg-[#E5E6E9] flex items-center justify-center">
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
            <i className="fa-solid fa-moon text-2xl"></i>
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
