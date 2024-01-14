import "./signin.css";

const SignIn = () => {
  return (
    <section className="signin w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[#333333] text-xl">Sign in</h1>
      <div className="warning bg-[#DBDBDB] rounded-md px-4 py-2 mt-2">
        <p className="text-[14px]">
          <i className="fa-solid fa-triangle-exclamation text-orange-400"></i>{" "}
          Please fill all the input fields
        </p>
      </div>
      <form className="signin-form rounded-md px-3 py-5 mt-7 flex flex-col items-center justify-center border-gray-200 border-[1.5px]">
        <label className="self-start font-bold text-[#333333] text-base ">
          Email
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-envelope text-xl text-[#9A9A9A]"></i>
          <input
            type="text"
            placeholder="Enter email"
            className="w-11/12 ml-3 outline-0"
          />
        </div>

        <label className="self-start font-bold text-[#333333] text-base mt-4">
          Password
        </label>
        <div className="flex w-full items-center border-gray-200 border-[1px] py-2 px-3 mt-[2px] rounded-md">
          <i className="fa-solid fa-lock text-xl text-[#9A9A9A]"></i>
          <input
            type="password"
            placeholder="Enter password"
            className="w-11/12 ml-3 outline-0"
          />
        </div>
        <button className="rounded-md w-full py-2 px-3 bg-[#849BF6] text-white mt-6">
          Sign in
        </button>
        <p className="mt-3 text-[#9A9A9A]">
          Don't have an account?{" "}
          <span className="underline cursor-pointer">Sign up</span>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
