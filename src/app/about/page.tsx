import React from "react";
import data from "../api/data";
import Hero from "@/components/Sub_Component/AboutHero";
// import TextAnimation from "../component/Animation/TextAnimation";
import All_Button from "@/components/Sub_Component/All_Button";
import mail from "../../../public/3D ICON/Gmail.png";
import Location from "../../../public/3D ICON/location.png";
import Arrow from "../../../public/Images/arrow.svg";
import student from "../../../public/3D ICON/student.png";
import TechStack from "@/components/Sub_Component/TechStack";
import GitHubStats from "@/components/Sub_Component/GitHubStats";
import LinkedInCon from "@/components/Sub_Component/LinkedInCon";
import AboutIMG from "../../../public/Images/Profile pic.jpg";
import Image from "next/image";
import Contact from "@/components/Contact";

const About = () => {
  const DATA = data.About;

  return (
    <section className="mt-[7.5rem] flex flex-col gap-10">
      <div className="flex flex-col gap-16 pt-1 md:w-11/12 w-[98%] mx-auto">
        {DATA.map((item) => {
          return (
            <>
              <div className="about-page about-page1" key={item.id}>
                <Hero image={AboutIMG} id={1} />

                <div className="xl:w-[85%] lg:w-[90%] w-[100%] h-[100%] flex flex-col gap-10">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-[2.5rem] flex mx-auto gap-2 font-bold leading-normal about-text">
                      {item.title}
                      <Image
                        src={student}
                        alt="student.png"
                        loading="lazy"
                        className="w-[4rem] rounded-b-2xl -mt-1"
                      />
                    </h1>

                    <h2 className="md:text-[1.7rem] flex sm:text-[1.5rem] text-[13.5px] sm:mx-auto mx- font-semibold leading-normal">
                      {item.heading}
                      <span className="auto-typing-1 md:ml-2 ml-1 text-[#f8ce96]">
                        {/* <TextAnimation /> */}
                        Full Stack Developer
                      </span>
                    </h2>

                    <p className="text-justify leading-normal md:font-bold font-normal md:text-[1rem] sm:text-[.9rem] text-[.7rem]">
                      {item.description}
                    </p>

                    <div className="flex md:flex-row flex-col md:mx-auto lg:gap-[1rem] md:gap-[3rem] gap-[2rem] ">
                      {/* Mail */}
                      <div className="flex flex-row items-center mt-3">
                        {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
                        <Image
                          src={mail}
                          alt=""
                          className="xl:w-16 w-12"
                          loading="lazy"
                        />
                        <p className="pl-2 font-bold xl:text-[1rem] text-[0.9rem]">
                          <span className="text-[#f8ce96] ">Mail id : </span>{" "}
                          {item.email}
                        </p>
                      </div>

                      {/* Location  */}
                      <div className="flex flex-row items-center mt-3">
                        <Image
                          src={Location}
                          alt=""
                          className="xl:w-16 w-12"
                          loading="lazy"
                        />
                        <p className="pl-2 font-bold xl:text-[1rem] text-[0.9rem]">
                          <span className="text-[#f8ce96] ">Location :</span>{" "}
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*   💻 Tech Stack:*/}
                  <div className="flex flex-col gap-6 items-start ">
                    <h1 className="xl:text-[2.5rem] md:text-[2rem] text-[1.8rem] leading-normal">
                      💻
                      <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                        Tech Stack:
                      </span>
                    </h1>
                    <TechStack />
                  </div>

                  {/*   📊 GitHub Stats: */}
                  <div className="flex flex-col gap-6 items-start ">
                    <h1 className="xl:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-bold leading-normal">
                      📊
                      <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                        GitHub Stats:
                      </span>
                    </h1>
                    <GitHubStats />
                  </div>

                  {/*  🌐 LinkedIn Profile: */}
                  <div className="flex flex-col gap-6 items-start">
                    <h1 className="xl:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-bold leading-normal">
                      🌐
                      <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                        LinkedIn Profile:
                      </span>
                    </h1>
                    <LinkedInCon />
                  </div>

                  <div className="w-[190px] mx-auto">
                    <All_Button
                      text={"Go To Home"}
                      linkto={"/"}
                      icon={<Image src={Arrow} alt="arrow" loading="lazy" />}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Contact />
    </section>
  );
};

export default About;
