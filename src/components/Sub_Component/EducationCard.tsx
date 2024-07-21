import Image from "next/image";
import React from "react";

interface EducationProps {
  image: string | any; // Image URL or Image object
  date: string;
  name: string;
  branch: string;
  standard: string;
  id: number; // Unique key for each education card
}

const EducationCard: React.FC<EducationProps> = (props) => {
  const { image, date, name, branch, standard, id } = props;

  return (
    <div
      className="xl:w-[80%] sm:w-[88%] xs:w-[95%] w-[85%] h-[50%] mx-auto"
      key={id}
    >
      <li className="relative min-h-full mb-5 sm:ms-4 ms-2 list-none flex sm:gap-5 gap-2">
        {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
        <div className="div-line">
          {/* <span className="absolute mt-[0.15rem] -ml-[1.6rem] flex w-1 h-1 border-solid border-2 p-2 rounded-full my-[11.5px] bg-transparent "></span> */}
          <span className="span-circle"></span>
          <span className="span-line"></span>
        </div>

        <div className="leading-4 mt-4 flex flex-1 md:flex-row flex-col gap-2 py-1 sm:pl-3 pl-1 w-full h-full card-shadow rounded-2xl hover:-translate-y-3 transition-all duration-500">
          <div className="lg:w-[50%] md:w-[68%] sm:w-[98%] w-[100%] sm:p-2 p-1">
            <Image src={image} alt="" className="w-full h-full" />
          </div>
          <div className="w-full h-full mt-2 xl:px-2 px-1 py-2 flex flex-col md:gap-0 gap-1">
            <time className="mb-1 md:text-sm text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              {date}
            </time>
            <h3 className="lg:text-lg text-base font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <h4 className="mb-4 lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
              {branch}
            </h4>
            <h5 className="mb-4 lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
              {standard}
            </h5>
          </div>
        </div>
      </li>
    </div>
  );
};

export default EducationCard;