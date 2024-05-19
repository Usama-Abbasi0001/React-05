import React from "react";
import "./Accounrt.css";
import { Link } from "react-router-dom";
function Accounrt() {
  return (
    <>
      <div className="lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start">
        <div className="text-[36px]">Create an account</div>
        <div className="text-[16px]">Enter your details below</div>
        <div id="">
          <input type="name" name="text" placeholder="name..." id="name" />
        </div>
        <div id="">
          <input
            type="email"
            name="text"
            placeholder="Email or Phone Number"
            id="email"
          />
        </div>
        <div>
          <input
            id="pass"
            type="password"
            name="number"
            placeholder="Password"
          />
        </div>
        <div className="mt-[30px] ">
          <button className="bg-red-600 py-3 px-10 w-[300px] text-white">
            Create Account
          </button>
        </div>
        <div
          className="flex space-x-1 items-center justify-center w-[300px] mt-[30px] py-3 cursor-pointer"
          id="gogle"
        >
          <div>
            <img src={require("./images/google.png")} alt="" />
          </div>
          <div>Sign up with Google</div>
        </div>
        <Link
          to="/login"
          className="flex space-x-1 items-center justify-center mt-[30px] w-[300px]"
        >
          Already have account? <span className="ps-2">log in</span>
        </Link>
      </div>
    </>
  );
}

export default Accounrt;
