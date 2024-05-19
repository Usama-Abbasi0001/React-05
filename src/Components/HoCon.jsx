import React from "react";
import { Link } from "react-router-dom";
function HoCon() {
  return (
    <>
      <div className="lg:ps-0 ps-[1rem]">
        <div className="flex space-x-2 lg:w-[1250px] w-[full] mx-auto mt-[3rem]">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>
          <div>/</div>
          <Link to="/contact" className="hover:text-red-400">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default HoCon;
