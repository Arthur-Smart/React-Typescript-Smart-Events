import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-[#E5E6E9] flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div>
          <p className="text-xl text-[#492F6A] font-bold cursor-pointer">
            Smart Events
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <i className="fa-solid fa-moon text-2xl"></i>
          </div>
          <div className="ml-4">
            <button className="bg-white text-[#492F6A] px-6 py-2 rounded-md">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
