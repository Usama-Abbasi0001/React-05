import React from "react";
import "./cards.css";

function Cards({ side, text, dolor, dolort, num, pimage, id1, star }) {
  function enter() {
    var a = document.getElementById(id1);

    a.style.display = "block";
  }

  function leave() {
    var b = document.getElementById(id1);

    b.style.display = "none";
  }

  return (
    <div className="flex flex-col">
      <div className="w-[300px] h-[320px]  bg-gray-200 rounded-[4px]">
        <div
          className="flex justify-center py-4"
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          <div
            className="w-[60px] h-[40px] bg-red-500 text-white text-center p-2 rounded-[4px]
        "
          >
            {side}
          </div>
          <div className="mt-16">
            <img src={pimage} alt="" />
          </div>
          <div className="space-y-3">
            <div>
              <img src={require("./images/Fill Heart.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Fill Eye.png")} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[300px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer"
          id={id1}
        >
          {" "}
          Add To Card
        </div>
      </div>

      <div className="mt-4">
        <div className="font-bold">{text}</div>
        <div className="text-red-600 mt-1">
          {dolor} <span className="text-gray-600">{dolort}</span>
        </div>
        <div className="mt-2 flex space-x-2 items-center">
          <div>
            <img src={require("./images/star.png")} alt="" />
          </div>
          <div>
            <img src={require("./images/star.png")} alt="" />
          </div>
          <div>
            <img src={require("./images/star.png")} alt="" />
          </div>
          <div>
            <img src={require("./images/star.png")} alt="" />
          </div>
          <div>
            <img src={star} alt="" />
          </div>
          <div className="text-gray-600">{num}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
