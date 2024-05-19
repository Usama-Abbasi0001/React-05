import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function SignNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="flex justify-between lg:ps-[3rem] ps-[1rem] lg:pe-[6rem] pe-[1rem] mt-[2rem] pb-6"
        id="nav"
      >
        <div className="text-[26px] font-bold">Exclusive</div>
        <ul
          className={`space-x-8 pe-[7rem] hidden lg:flex ${
            isOpen ? "hidden" : ""
          }`}
        >
          <li>
            <a href="/" className="hover:text-red-400">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-400">
              Contact
            </a>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-400">
              About
            </Link>
          </li>
          <li>
            <a href="/" className="hover:text-red-400">
              Sign Up
            </a>
          </li>
        </ul>
        <div className="space-x-4 lg:flex hidden">
          <div className="flex">
            <input
              className="bg-gray-200 p-2 rounded-[4px] relative w-[15rem]"
              type="search"
              name="name"
              placeholder="What are you looking for?"
            />
            <img
              src={require("./images/Component 2.png")}
              className="bg-gray-200 p-2 rounded-[4px] relative -left-[30px]"
              alt="Search icon"
            />
          </div>
        </div>
        <div className="lg:hidden flex" onClick={toggleNav}>
          <img
            src={require("./images/Vector.png")}
            alt="Menu icon"
            className="size-[30px]"
          />
        </div>
        <IoMdClose
          className={`lg:hidden flex size-[40px] ${isOpen ? "" : "hidden"}`}
          onClick={toggleNav}
        />
      </nav>

      <div className={`lg:hidden block ps-[2rem] ${isOpen ? "" : "hidden"}`}>
        <ul className="space-y-3" id="links-1">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div
          className="flex md:space-x-4 space-x-2 lg:hidden items-center"
          id="links-2"
        >
          <div className="flex mt-5">
            <input
              className="bg-gray-200 p-2 rounded-[4px] relative w-[15rem]"
              type="search"
              name="name"
              placeholder="What are you looking for?"
            />
            <img
              src={require("./images/Component 2.png")}
              className="bg-gray-200 p-2 rounded-[4px] absolute lg:left-[1130px] md:left-[240px] left-[230px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignNav;
