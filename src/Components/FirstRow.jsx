import React from "react";
import "./FirstRow.css";
import { SlArrowRight } from "react-icons/sl";

function FirstRow() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <div className="flex justify-around">
        <ul
          className="w-[300px] space-y-3 pt-10 me-10 text-[15px] lg:block hidden"
          id="side"
        >
          <div className="flex space-x-16 items-center cursor-pointer hover:text-red-400">
            <li>Woman’s Fashion</li>
            <SlArrowRight />
          </div>
          <div className="flex space-x-20 items-center cursor-pointer hover:text-red-400">
            <li>Men’s Fashion</li>
            <SlArrowRight />
          </div>
          <li className="cursor-pointer hover:text-red-400">Electronics</li>
          <li className="cursor-pointer hover:text-red-400">
            Home & Lifestyle
          </li>
          <li className="cursor-pointer hover:text-red-400">Medicine</li>
          <li className="cursor-pointer hover:text-red-400">
            Sports & Outdoor
          </li>
          <li className="cursor-pointer hover:text-red-400">Baby’s & Toys</li>
          <li className="cursor-pointer hover:text-red-400">
            Groceries & Pets
          </li>
          <li className="cursor-pointer hover:text-red-400">
            Health & Beautys
          </li>
        </ul>
      </div>
    </>
  );
}

export default FirstRow;
