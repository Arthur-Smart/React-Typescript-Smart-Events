import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div>
          <p className="logo cursor-pointer">Smart Events</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
