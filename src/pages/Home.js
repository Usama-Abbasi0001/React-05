import React from "react";
import Account from "../Components/Account";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import Support from "../Components/Support";
import Exclu from "../Components/Exclu";
import Upers from "../Components/Upers";
import Delivery from "../Components/Delivery";
import Secpic from "../Components/Secpic";
import First from "../Components/First";
import Uper from "../Components/Uper";
import MainPic from "../Components/MainPic";
import Button from "../Components/Button";
import NewCard from "../Components/NewCard";
import CardHeart from "../Components/CardHeart";
import Our from "../Components/Our";
import Image from "../Components/Image";
import BlackCard from "../Components/BlackCard";
import SecCard from "../Components/SecCard";
import Month from "../Components/Month";
import Hr from "../Components/Hr";
import SixItems from "../Components/SixItems";
import Categories from "../Components/Categories";
import Cards from "../Components/Cards";
import Sales from "../Components/Sales";
import FirstRow from "../Components/FirstRow";
import NavBar from "../Components/Navbar";
import Header from "../Components/Header";

import black1 from "../Components/images/carblack.png";
import black2 from "../Components/images/carblack.png";
import black3 from "../Components/images/carblack.png";
import core from "../Components/images/car.png";
import sho from "../Components/images/shoes.png";
import mot from "../Components/images/remote.png";
import jacket from "../Components/images/kit.png";
import shant from "../Components/images/star-half.png";
import satr from "../Components/images/star.png";
import one from "../Components/images/dog.png";
import two from "../Components/images/laptop.png";
import three from "../Components/images/dslr.png";
import four from "../Components/images/careem.png";
import blank from "../Components/images/white.png";
import jarsi from "../Components/images/jarsi.png";
import pz from "../Components/images/pzrs.png";
import spk from "../Components/images/spk.png";
import table from "../Components/images/table.png";
import phone from "../Components/images/one.png";
import comp from "../Components/images/Computer.png";
import watch from "../Components/images/Watch.png";
import camera from "../Components/images/Camera.png";
import phon from "../Components/images/phone.png";
import Game from "../Components/images/Gamepad.png";
import image1 from "../Components/images/remote.png";
import image2 from "../Components/images/key.png";
import image3 from "../Components/images/led.png";
import image4 from "../Components/images/cher.png";
import image5 from "../Components/images/Vect.png";
import image6 from "../Components/images/star-half.png";
import image7 from "../Components/images/star.png";
import Featured from "../Components/Featured";
import Icin from "../Components/Icin";
const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="lg:w-[1250px] w-[full] mx-auto border lg:flex justify-between">
        <FirstRow />
        <Icin />
      </div>
      <Sales />
      <div className="lg:flex  lg:w-[1250px] w-[full] mx-auto mt-8 justify-between">
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
      <Button />
      <Categories />
      <div className="lg:w-[1250px] w-[full] lg:ps-3 mx-auto lg:flex md:justify-between md:ps-0 ps-[6rem]">
        <div className="md:flex lg:space-x-8 ">
          <SixItems name="Phones" ximage={phone} />
          <SixItems name="Computers" ximage={comp} />
          <SixItems name="SmartWatch" ximage={watch} />
        </div>
        <div className="md:flex lg:space-x-8 ">
          <SixItems name="Camera" ximage={camera} />
          <SixItems name="HeadPhones" ximage={phon} />
          <SixItems name="Gaming" ximage={Game} />
        </div>
      </div>
      <Hr />
      <Month />
      <div className="lg:flex  lg:w-[1250px] w-[full] mx-auto mt-8 justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10 md:space-y-0 space-y-[7rem]">
          <SecCard
            zimage={jarsi}
            main="The north coat"
            dolur="$260"
            but="$300"
          />
          <SecCard
            zimage={pz}
            main="Gucci duffle bag"
            dolur="$110"
            but="$230"
          />
        </div>
        <div
          className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10 lg:mt-0 mt-[7rem] md:space-y-0 space-y-[7rem]"
          dolur="$570"
        >
          <SecCard
            zimage={spk}
            main="RGB liquid CPU Cooler"
            dolur="$420"
            but="$510"
          />
          <SecCard zimage={table} main="Small BookSelf" dolur="$260" />
        </div>
      </div>
      <div className="lg:flex lg:w-[1250px] w-[full] mx-auto mt-[10rem] p-10 bg-black justify-around">
        <BlackCard />
        <Image />
      </div>
      <Our />
      <div className="lg:flex   lg:w-[1250px] w-[full] mx-auto mt-[5rem] justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10">
          <CardHeart
            united={one}
            hading="Breed Dry Dog Food"
            dollar="$100"
            amunt="(35)"
            white={blank}
            idl="add5"
          />
          <CardHeart
            united={two}
            hading="CANON EOS DSLR Camera"
            dollar="$360"
            amunt="(95)"
            white={blank}
            idl="add2"
          />
        </div>
        <div className="md:flex lg:space-x-4 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <CardHeart
            united={three}
            hading="ASUS FHD Gaming Laptop"
            dollar="$700"
            amunt="(135)"
            white={blank}
            idl="add3"
          />
          <CardHeart
            united={four}
            hading="Curology Product Set "
            dollar="$500"
            amunt="(145)"
            white={blank}
            idl="add4"
          />
        </div>
      </div>
      <div className="lg:flex   lg:w-[1250px] w-[full] mx-auto mt-[5rem] justify-between">
        <div className="md:flex lg:space-x-4 md:justify-around md:ps-0 ps-10">
          <NewCard
            whyp={core}
            kind="Kids Electric Car"
            dollar="$960"
            chang="(65)"
            full={satr}
          />
          <NewCard
            whyp={sho}
            kind="Jr. Zoom Soccer Cleats"
            dollar="$1160"
            chang="(35)"
            full={satr}
          />
        </div>
        <div className="md:flex lg:space-x-4 md:justify-around  md:ps-0 ps-10 lg:mt-0 mt-10">
          <NewCard
            whyp={mot}
            kind="GP11 Shooter USB Gamepad"
            dollar="$660"
            chang="(55)"
            half={shant}
          />
          <NewCard
            whyp={jacket}
            kind="Quilted Satin Jacket"
            dollar="$660"
            chang="(55)"
            half={shant}
          />
        </div>
      </div>
      <Button />
      <Featured />
      <div className="lg:w-[1250px] w-[full] mx-auto mt-[5rem]  lg:flex justify-between lg:ps-0 md:ps-[7rem]">
        <MainPic />
        <div className="lg:mt-0 mt-5">
          <Uper />
          <div className="flex justify-between lg:mt-8 mt-6 lg:me-0 md:me-[5rem] md:gap-0 gap-4">
            <First />
            <Secpic />
          </div>
        </div>
      </div>
      <div className="lg:flex   lg:w-[1250px] w-[full] mx-auto mt-[5rem] lg:justify-evenly  lg:ps-0 md:ps-[15rem] ps-[4rem]">
        <Delivery
          free="FREE AND FAST DELIVERY"
          order="Free delivery for all orders over $140"
          thar={black1}
        />
        <Delivery
          free="24/7 CUSTOMER SERVICE"
          order="Friendly 24/7 customer support"
          thar={black2}
        />
        <Delivery
          free="MONEY BACK GUARANTEE"
          order="We reurn money within 30 days"
          thar={black3}
        />
      </div>
      <div className="lg:w-[1250px] w-[full] mt-[5rem] mx-auto flex justify-end">
        <Upers />
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

export default Home;
