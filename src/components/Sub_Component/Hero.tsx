import React from "react";
import React_js from "../../../public/3D ICON/react.png";
import Express from "../../../public/3D ICON/express.png";
import Node from "../../../public/3D ICON/NodeJs.png";
import DB from "../../../public/3D ICON/mongo-db.png";
import Js from "../../../public/3D ICON/js.png";
import Java from "../../../public/3D ICON/java.png";
import Heros from "../../../public/Images/Hero-Image1.jpg";
import Tilt from "./Tilt";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="xl:w-[42%] lg:w-[40%] md:w-[45%] sm:w-[55%] xs:w-[70%] w-[100%] h-full md:right-0 sm:-right-[10%] xs:-right-[15%] -right-[40%] sm:mt-0 mt-1 flex items-center justify-end md:static absolute">
      <div>
        <Tilt>
          <Image
            src={Heros}
            alt="img"
            loading="lazy"
            className="xl:w-[28rem] md:w-[25rem] sm:w-[24rem] w-[23rem] h-full xl:-mt-[2rem] lg:-mt-[0] md:mt-[1rem] sm:mt-[3rem] -mt-[4rem] md:opacity-100 opacity-[0.50]"
          />
        </Tilt>

        <div className="absolute md:flex hidden xl:top-6 lg:top-16 top-[6rem]">
          <Image
            src={React_js}
            alt="React.js"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] md:w-[3rem] topdown"
          />
        </div>
        {/* Express */}
        <div className="absolute md:flex hidden xl:top-[15rem] lg:top-[14rem] top-[15rem] xl:right-[28rem] lg:right-[24rem] right-[22rem]">
          <Image
            src={Express}
            alt="Express"
            loading="lazy"
            className="xl:w-[4rem] lg:w-[3.3rem] w-[2.5rem] rightleft "
          />
        </div>
        {/* DB */}
        <div className="absolute md:flex hidden xl:top-[29rem] lg:top-[26.5rem] top-[27rem] xl:right-[21rem] lg:right-[18rem] right-[16rem]">
          <Image
            src={DB}
            alt="DB"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] w-[3rem] topdown"
          />
        </div>
        {/* Js */}
        <div className="absolute md:flex hidden lg:top-[26rem] top-[24rem] xl:right-[4rem] right-[3rem]">
          <Image
            src={Js}
            alt="Js"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.4rem] w-[3rem] rightleft "
          />
        </div>
        {/* Java */}
        <div className="absolute md:flex hidden top-[15rem] -right-[2rem]">
          <Image
            src={Java}
            alt="Java"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.6rem] md:w-[3rem] topdown"
          />
        </div>
        {/* Node */}
        <div className="absolute md:flex hidden xl:top-[2rem] lg:top-[4rem] top-[7rem] xl:right-[5rem] lg:right-[4rem] right-[1rem]">
          <Image
            src={Node}
            alt="Node"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] md:w-[3rem] rightleft "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
