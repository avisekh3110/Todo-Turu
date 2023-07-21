import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <form className="bg-slate-300 w-1/2 gap-6 p-6 flex flex-col justify-center items-center">
        <input
          className="py-4 px-6 w-full"
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <input
          className="py-4 px-6 w-full"
          placeholder="Password"
          type="password"
          name="password"
        />
        <button
          className="bg-violet-800 w-full py-4 px-6 text-white "
          type="submit"
        >
          LOGIN
        </button>
        <div className="flex flex-row gap-2 text-base">
          <div className="signuptxt">Don't have an Account?</div>
          <Link className="text-blue-700 font-bold" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
