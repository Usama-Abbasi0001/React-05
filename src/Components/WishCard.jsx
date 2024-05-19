import React from "react";

function WishCard() {
  return (
    <div className="flex  lg:w-[1250px] md:w-[700px] lg:ms-[3rem] md:px-0 px-4 md:ms-[2rem] mt-[4rem] justify-between  ">
      <div className="text-[24px]">Wislisht (4)</div>
      <div>
        <button className="border px-[20px] py-[15px] items-center">
          Move All To Bag
        </button>
      </div>
    </div>
  );
}

export default WishCard;
