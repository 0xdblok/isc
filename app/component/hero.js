import React from "react";
import Image from "next/image";
import logo from "../asset/logo.png";
import donk from "../asset/donk.png";
export default function Heroo() {
  return (
    <div className="lg:px-12 px-4 pt-12">
      <div className="flex-none md:flex  md:p-6 p-2 rounded-lg   h-auto md:h-[280px] lg:h-[350px]">
        <div className=" flex justify-center w-full ">
          <Image
            src={logo}
            className="md:border-4 border-4 rounded-xl border-[#F5CD1B]   lg:w-[380px] lg:h-full md:w-[290px] md:h-full  "
            alt="Isaac Neewton"
            width="450"
            height="450"
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <p className="lg:text-4xl text-center font-extrabold font-sans text-2xl pt-4 md:pt-0">
            Isaac Newton
            <span>
              {" "}
              <p className="text-center text-base font-medium  font-sans md:pt-6 ">
                In the historical backdrop of Woolsthorpe, the birthplace of Sir
                Isaac Newton, a novel cryptocurrency was born—APPLE Memecoin.
                The brainchild of this venture was a quirky group of crypto
                enthusiasts who drew inspiration from Newton's groundbreaking
                theories.
              </p>
            </span>
          </p>
        </div>{" "}
      </div>{" "}
      <div className="pt-20 flex justify-center w-full ">
        <Image
          src={donk}
          className="  lg:w-[380px] lg:h-full md:w-[290px] md:h-full  "
          alt="Isaac Neewton"
          width="450"
          height="450"
        />
      </div>
    </div>
  );
}
