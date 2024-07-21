import React from "react";
// import Tilt from "./Sub_Component/Tilt";
import Image from "next/image";

import { skill6, skill5, skill4, skill3 } from "../app/api/data";
import Tilt from "./Sub_Component/Tilt";

const Skill = () => {
  // const skill = Data.Skills;

  // console.log(skill);

  return (
    <section className="px-0 skill-section">
      <div className="mx-auto max-w-[380px] text-center">
        <h2 className="h2-heading">I Have Learn This Skills</h2>
        <h1 className="h1-heading skill">Skills</h1>
      </div>
      <Tilt>
        <div className="skill-page">
          {/* <div className="border border-orange-200 hover:shadow-lg hover:shadow-orange-300 rounded-3xl mx-auto w-[70%] h-[450px] flex flex-wrap justify-between gap-6 p-5"> */}
          <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[80%] md:w-[90%] w-[96%] py-2 px-1">
            {skill6.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item} */}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt="img"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[70%] md:w-[80%] w-[80%] py-2 px-1">
            {skill5.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item} */}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt="img"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[60%] md:w-[70%] w-[72%] py-2 px-1">
            {skill4.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item} */}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    className="rounded-[40px]"
                    alt="img"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[50%] md:w-[60%] w-[45%] py-2 px-1">
            {skill3.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item} */}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    className="rounded-[40px]"
                    alt="img"
                  />
                </div>
              );
            })}
          </div>
          {/* </div> */}
          {/* </Tilt> */}
        </div>
      </Tilt>
    </section>
  );
};

export default Skill;