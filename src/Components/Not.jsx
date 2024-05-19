import React from "react";

function Not() {
  return (
    <div className="text-center">
      <div className="text-[110px] text-bold mt-[3rem]">404 Not Found</div>
      <div>Your visited page not found. You may go home page.</div>
      <div>
        <button className="bg-red-600 py-4 rounded-[6px] mt-[5rem] px-10 text-white">
          Back to home page
        </button>
      </div>
    </div>
  );
}

export default Not;
