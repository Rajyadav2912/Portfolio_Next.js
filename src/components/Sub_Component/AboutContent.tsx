import React from "react";
import student from "../../../public/3D ICON/student.png";
import mail from "../../../public/3D ICON/Gmail.png";
import Location from "../../../public/3D ICON/location.png";
import Arrow from "../../../public/Images/arrow.svg";
import Image from "next/image";
import ALL_Button from "./All_Button";

interface ContentProps {
  title: string;
  heading: string;
  description: string;
  email: string;
  location: string;
  path: string;
  id: number;
}

const Content: React.FC<ContentProps> = (props) => {
  const { title, heading, description, email, location, id } = props;

  return (
    <div
      className="xl:w-[45rem] md:w-[38rem] sm:w-[30rem] xs:w-[21rem] w-[20rem] h-[32rem] flex flex-col items-start gap-4 p-2 pt-6"
      key={id}
    >
      <h1 className="text-[2.5rem] lg:mx-0 mx-auto flex gap-2 font-bold leading-normal about-text">
        {title}
        <Image
          src={student}
          alt="student.png"
          loading="lazy"
          className="w-[4rem] rounded-b-2xl -mt-1"
        />
      </h1>

      <h2 className="flex xl:text-[1.66rem] text-[1.6rem] mx-0 font-semibold leading-normal">
        {heading}
        <span className="auto-typing-1 text-[#f8ce96] ml-2">
          {/* <TextAnimation /> */}
          Full Stack Developer
        </span>
      </h2>

      <p className="text-justify leading-normal font-bold xl:text-[1rem] sm:text-[0.85rem] text-[0.7rem]">
        {description}
      </p>

      {/* Mail */}
      <div className="flex flex-row items-center">
        {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
        <Image
          src={mail}
          alt=""
          className="xl:w-16 sm:w-14 w-11"
          loading="lazy"
        />
        <p className="pl-2 font-bold sm:text-[1rem] text-[0.8rem]  ">
          <span className="text-[#f8ce96] ">Mail id : </span>
          {email}
        </p>
      </div>

      {/* Location  */}
      <div className="flex flex-row items-center">
        <Image
          src={Location}
          alt=""
          className="xl:w-16 sm:w-14 w-11"
          loading="lazy"
        />
        <p className="pl-2 font-bold sm:text-[1rem] text-[0.8rem]">
          <span className="text-[#f8ce96] ">Location : </span>
          {location}
        </p>
      </div>

      <div className="lg:mx-0 mx-auto">
        <ALL_Button
          text={"Read more"}
          linkto={props.path}
          icon={<Image src={Arrow} alt="arrow" loading="lazy" />}
        />
      </div>

      {/* <Link to="/about">
              <button className="w-full flex h-full py-2 xl:px-5 px-4 gap-1 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
                Read more
                <img src={Arrow} alt="arrow" loading="lazy" />
              </button>
            </Link> */}
    </div>
  );
};

export default Content;
