import React from "react";
import "./NavBar.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function NavBar() {
  function toggler() {
    var a = document.getElementById("links-1");
    a.style.display = "block";
    var a = document.getElementById("links-2");
    a.style.display = "flex";

    var b = document.getElementById("open");

    b.style.display = "none";

    var c = document.getElementById("close");

    c.style.display = "block";
  }

  function close() {
    var a = document.getElementById("links-1");
    a.style.display = "none";
    var a = document.getElementById("links-2");
    a.style.display = "none";

    var b = document.getElementById("open");

    b.style.display = "block";

    var c = document.getElementById("close");

    c.style.display = "none";
  }

  return (
    <>
      <nav
        className="flex justify-between lg:ps-[3rem] ps-[1rem] lg:pe-[6rem] pe-[1rem] mt-[2rem] pb-6"
        id="nav"
      >
        <div className="text-[26px] font-bold">Exclusive</div>
        <ul className="space-x-8 pe-[7rem] hidden lg:flex">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>
          <Link to="/contact" className="hover:text-red-400">
            Contact
          </Link>
          <Link to="/about" className="hover:text-red-400">
            About
          </Link>
          <Link to="/signup" className="hover:text-red-400">
            Sign Up
          </Link>
        </ul>
        <div className=" space-x-4 lg:flex hidden">
          <div className="flex">
            <input
              className="bg-gray-200 p-2 rounded-[4px] relative w-[15rem]"
              type="search"
              name="name"
              placeholder="What are you looking for?"
            />
            <img
              src={require("./images/Component 2.png")}
              className="bg-gray-200 p-2 rounded-[4px] relative '"
              alt=""
            />
          </div>
          <div>
            {" "}
            <Link to="/wishlist">
              <img src={require("./images/Wishlist.png")} alt="" />
            </Link>
          </div>
          <div>
            <img src={require("./images/tralii.png")} alt="" />
          </div>
          <div>
            <img src={require("./images/user.png")} alt="" />
          </div>
        </div>
        <div className="lg:hidden flex" id="open" onClick={toggler}>
          <img
            src={require("./images/Vector.png")}
            alt=""
            className="size-[30px]"
          />
        </div>
        <IoMdClose
          className="lg:hidden flex size-[40px]"
          onClick={close}
          id="close"
        />
      </nav>

      <div className="lg:hidden block ps-[2rem]">
        <ul className="space-y-3" id="links-1">
          <li>Hone</li>
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
          <div>
            <img
              src={require("./images/Wishlist.png")}
              alt=""
              className="mt-5"
            />
          </div>
          <div>
            <img src={require("./images/tralii.png")} alt="" className="mt-5" />
          </div>
          <div>
            <img src={require("./images/user.png")} alt="" className="mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
