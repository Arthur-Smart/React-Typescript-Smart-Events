import { useContext, useState } from "react";
import "./signup.css";
import { IAuth } from "../../interfaces/AuthInterface";
import AxiosRequest from "../../AxiosRequest";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { state } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [authDetails, setAuthDetails] = useState<IAuth>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { name, email, password, password2 } = authDetails;

      if (email == "" || email == "" || password == "" || password2 == "") {
        toast.error("Please fill all fields", {
          position: "top-right",
        });
        setLoader(false);

        return;
      }

      if (password !== password2) {
        toast.error("Password do not match", {
          position: "top-right",
        });
        setLoader(false);
        return;
      }

      await AxiosRequest.post("auth/signup", {
        name,
        email,
        password,
      });
      navigate("/signin");
    } catch (err) {
      setError(err);
      if (error) {
        toast.error(`Invalid credentials`, {
          position: "top-right",
        });
        setLoader(false);
      }
    }
    console.log("it works");
  };

  return (
    <section className="signup w-full flex flex-col items-center justify-center px-4">
      <h1
        className={
          state.isDarkMode
            ? "font-bold text-white text-xl"
            : "font-bold text-[#333333] text-xl"
        }
      >
        Sign up
      </h1>
      <div className="warning bg-[#DBDBDB] rounded-md px-4 py-2 mt-2">
        <p className="text-[14px]">
          <i className="fa-solid fa-triangle-exclamation text-orange-400"></i>{" "}
          Please fill all the input fields
        </p>
      </div>
      <form
        className={
          state.isDarkMode == true
            ? "is-dark signup-form rounded-md px-3 py-5 mt-7 flex flex-col items-center justify-center border-gray-200 border-[1.5px]"
            : "signup-form rounded-md px-3 py-5 mt-7 flex flex-col items-center justify-center border-gray-200 border-[1.5px]"
        }
      >
        <label className="self-start font-bold text-[#333333] text-base">
          Name
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-user text-xl text-[#9A9A9A]"></i>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-11/12 ml-3 outline-0"
            onChange={handleChange}
          />
        </div>

        <label className="self-start font-bold text-[#333333] text-base mt-4">
          Email
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-envelope text-xl text-[#9A9A9A]"></i>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            className="w-11/12 ml-3 outline-0"
            onChange={handleChange}
          />
        </div>

        <label className="self-start font-bold text-[#333333] text-base mt-4">
          Password
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-lock text-xl text-[#9A9A9A]"></i>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-11/12 ml-3 outline-0"
            onChange={handleChange}
          />
        </div>

        <label className="self-start font-bold text-[#333333] text-base mt-4">
          Confirm Password
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-lock text-xl text-[#9A9A9A]"></i>
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            className="w-11/12 ml-3 outline-0"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleSignup}
          className="rounded-md w-full py-2 px-3 bg-[#849BF6] text-white mt-6"
        >
          {loader ? <p>Wait a moment...</p> : <p>Sign up</p>}
        </button>
        <p className="mt-3 text-[#9A9A9A]">
          Already have an account?{" "}
          <Link to="/signin">
            {" "}
            <span className="underline cursor-pointer">Sign in</span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
