import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row w-screen items-center lg:px-12 p-5">
      <div className="font-bold self-start w-full text-white   sm:text-3xl lg:text-4xl text-2xl  duration-300 ">
        TODO_TURU
      </div>
      <div className="  flex flex-row gap-4">
        <Link
          to={"/login"}
          className="hidden sm:block px-4 sm:px-7  bg-white hover:bg-transparent  text-sm sm:text-lg font-semibold rounded-3xl border-4 border-white duration-300  text-black hover:text-white "
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="px-4 sm:px-7 text-sm sm:text-lg bg-transparent hover:bg-white font-semibold rounded-3xl border-2 sm:border-4 border-white duration-300  text-white hover:text-black"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
