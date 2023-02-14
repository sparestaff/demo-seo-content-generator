import { ReactNode } from "react";
import Link from "next/link";
import Slider from "components/elements/Slider";
import { AiOutlineTeam, AiFillThunderbolt, AiFillApple } from "react-icons/ai";
import { MdSettingsBackupRestore } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaGlobeAmericas, FaShippingFast } from "react-icons/fa";

import { camelCaseAll } from "utils/formatter";

type SliderItem = {
  icon: ReactNode;
  title: string;
  desc: ReactNode;
};

const Services = ({
  keyword,
  location,
}: {
  keyword: string;
  location?: string;
}) => {
  const sliderItems: SliderItem[] = [
    {
      icon: <AiOutlineTeam />,
      title: `Expert ${keyword}`,
      desc: `Our ${
        location ? camelCaseAll(location) + " " : ""
      }${keyword}  experts have over 15 years of experience with projects for home and businesses.`,
    },
    {
      icon: <AiFillThunderbolt />,
      title: "Oblifation-Free quote",
      desc: "An obligation-free quote is given after the initial consultation. It's up to you to decide if you want to proceed with our quote.",
    },
    {
      icon: <FaShippingFast />,
      title: `Fast ${keyword} services${
        location ? " for " + camelCaseAll(String(location)) : ""
      }`,
      desc: `We provide fast ${keyword}${
        location ? " for " + camelCaseAll(String(location)) + " area" : ""
      }. Most services are completed on the same day.`,
    },
    {
      icon: <AiFillApple />,
      title: "High quality material",
      desc: "We use high-quality materials from suppliers that we trust. Many come with 1-year manufacturer warranty.",
    },
    {
      icon: <MdSettingsBackupRestore />,
      title: "No fix No fee",
      desc: "If our recommended resolution does not solve the problem, we'll redo the work for free or issue a full refund.",
    },
    {
      icon: <BiDollar />,
      title: "Price beat guarantee",
      desc: `Got a quote from another ${
        location ? camelCaseAll(String(location)) + " " : ""
      }${keyword} business? We will beat it by 5%.`,
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Proud to be Aussie-owned",
      desc: (
        <>
          We are proud to be an Australian owned and operated company supporting Australian families.
        </>
      ),
    },
  ];

  return (
    <div className="py-14 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      {location ? (
        <>
          <h3 className="text-3xl text-black font-bold  text-center">
            Why choose [Your Company]
          </h3>
          <p className="text-center py-5">
            What&lsquo;s included when you use our {camelCaseAll(location)}{" "}
            {keyword} services
          </p>
        </>
      ) : null}
      <Slider sm={1} md={2} lg={3} xl={4}>
        {sliderItems.map((item, idx) => (
          <div
            className="w-full md:w-60 grid grid-cols-1 rounded-lg shadow-md p-4 h-auto sm:h-72 my-5"
            key={idx}
          >
            <span className="text-5xl text-seo-primary">{item.icon}</span>
            <p className="text-black text-lg font-bold  pt-2 pb-1">
              {item.title}
            </p>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
