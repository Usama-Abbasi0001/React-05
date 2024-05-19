import React from "react";
import Header from "../Components/Header";
import SignNav from "../Components/SignNav";
import WishCard from "../Components/WishCard";
import BagCard from "../Components/BagCard";
import bags from "../Components/images/pzrs.png";
import spk from "../Components/images/spk.png";
import rem from "../Components/images/remote.png";
import kit from "../Components/images/kit.png";
import Just from "../Components/Just";
import Cards from "../Components/Cards";
import image1 from "../Components/images/remote.png";
import image2 from "../Components/images/key.png";
import image3 from "../Components/images/led.png";
import image4 from "../Components/images/cher.png";
import image5 from "../Components/images/Vect.png";
import image6 from "../Components/images/star-half.png";
import image7 from "../Components/images/star.png";
import Footer from "../Components/Footer";
import Exclu from "../Components/Exclu";
import Support from "../Components/Support";
import Account from "../Components/Account";
import Download from "../Components/Download";

const Wislisht = () => {
  return (
    <>
      <Header />
      <SignNav />
      <WishCard />
      <div className="lg:flex  lg:w-[1250px] w-[full] mx-auto mt-[4rem] justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10">
          <BagCard
            main={bags}
            three="-35%"
            bug="Gucci duffle bag"
            gray="$1160"
          />
          <BagCard main={spk} bug="RGB liquid CPU Cooler" />
        </div>
        <div className="md:flex lg:space-x-4 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <BagCard main={rem} bug="GP11 Shooter USB Gamepad" />
          <BagCard main={kit} bug="Quilted Satin Jacket" />
        </div>
      </div>
      <Just />
      <div className="lg:flex  lg:w-[1250px] w-[full] mx-auto mt-[6rem] justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10">
          <Cards
            side="-40%"
            text="HAVIT HV-G92 Gamepad"
            dolor="$120"
            dolort="$160"
            num="(88)"
            pimage={image1}
            star={image7}
            id1="addp"
          />
          <Cards
            side="-35%"
            text="AK-900 Wired Keyboard"
            dolor="$960"
            dolort="$1120"
            num="(76)"
            pimage={image2}
            star={image5}
            id1="addp2"
          />
        </div>
        <div className="md:flex lg:space-x-4 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <Cards
            side="-30%"
            text="IPS LCD Gaming Monitor"
            dolor="$370"
            dolort="$420"
            num="(99)"
            pimage={image3}
            star={image7}
            id1="addp3"
          />
          <Cards
            side="-25%"
            text="S-Series Comfort Chair"
            dolor="$560"
            dolort="$760"
            num="(89)"
            pimage={image4}
            star={image6}
            id1="addp4"
          />
        </div>
      </div>
      <div className="w-[full] bg-black p-16 text-white mt-[10rem] lg:flex justify-between">
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

export default Wislisht;
