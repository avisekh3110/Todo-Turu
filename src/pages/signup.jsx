import React from "react";

function Signup() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <form
        className="bg-slate-300 w-1/2 gap-6 p-6 flex flex-col justify-center items-center"
        action="/done"
        method="post"
      >
        <input
          className="py-4 px-6 w-full"
          placeholder="Username"
          type="text"
          name="name"
        />
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
        <input
          className="py-4 px-6 w-full"
          placeholder="Confirm Password"
          type="password"
          name="cPassword"
        />
        <button
          className="bg-violet-800 w-full py-4 px-6 text-white "
          type="submit"
        >
          SIGN-UP
        </button>
        <div className="flex flex-row gap-2 text-base">
          <div className="signuptxt">Already have an Account?</div>
          <a className="text-blue-700 font-bold" href="/login">
            SignIn
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
