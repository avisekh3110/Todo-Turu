import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5174/auth/signup", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-slate-300 w-4/5 sm:w-1/2 md:w-1/3 gap-6 p-6 flex flex-col justify-center items-center"
      >
        <input
          onChange={(e) => {
            setFormData((prevFD) => {
              return { ...prevFD, username: e.target.value };
            });
          }}
          value={formData.username}
          className="py-4 px-6 w-full"
          placeholder="Username"
          type="text"
          name="name"
        />
        <input
          onChange={(e) => {
            setFormData((prevFD) => {
              return { ...prevFD, email: e.target.value };
            });
          }}
          value={formData.email}
          className="py-4 px-6 w-full"
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <input
          onChange={(e) => {
            setFormData((prevFD) => {
              return { ...prevFD, password: e.target.value };
            });
          }}
          value={formData.password}
          className="py-4 px-6 w-full"
          placeholder="Password"
          type="password"
          name="password"
        />
        <input
          onChange={(e) => {
            setFormData((prevFD) => {
              return { ...prevFD, cPassword: e.target.value };
            });
          }}
          value={formData.cPassword}
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
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
