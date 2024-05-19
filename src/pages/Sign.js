import React from "react";
import SignHeada from "../Components/SignHeada";
import SideImg from "../Components/SideImg";
import Accounrt from "../Components/Accounrt";
import Exclu from "../Components/Exclu";
import Support from "../Components/Support";
import Account from "../Components/Account";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import SignNav from "../Components/SignNav";

const Sign = () => {
  return (
    <>
      <SignHeada />
      <SignNav />
      <div className="lg:flex ">
        <SideImg />
        <Accounrt />
      </div>
      <div className="w-[full] bg-black p-16 text-white mt-8 lg:flex justify-between">
        <div className="md:flex lg:space-x-20 md:space-x-10  md:space-y-0 space-y-10">
          <Exclu />
          <Support />
          <Account
            one="Account"
            two="My Account"
            three="Login / Register"
            four="Cart"
            five="Wishlist"
            six="Shop"
          />
        </div>
        <div className="md:flex md:space-x-20 ">
          <Account
            one="Quick Link"
            two="Privacy Policy"
            three="Terms Of Use"
            four="FAQ"
            five="contact"
          />
          <Download />
        </div>
      </div>
      <div className="w-[full] bg-black text-center">
        <Footer />
      </div>
    </>
  );
};

export default Sign;
