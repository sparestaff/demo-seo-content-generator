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
      desc: `Our ${keyword} ${
        location ? camelCaseAll(location) : null
      } technicians have over 15 years of experience with both Windows and Apple Mac.`,
    },
    {
      icon: <AiFillThunderbolt />,
      title: "On-the-spot Free quote",
      desc: "A Free, obligation-free quote is given while you wait. It's up to you to decide if you want to proceed with our quote.",
    },
    {
      icon: <FaShippingFast />,
      title: "Same-day repairs",
      desc: "We provide same-day services. Most repairs are completed on the same-day.",
    },
    {
      icon: <AiFillApple />,
      title: "High quality spare parts",
      desc: "We use genuine manufacturer parts or higher-quality parts. Many come with 1-year manufacturer warranty.",
    },
    {
      icon: <MdSettingsBackupRestore />,
      title: "No fix No fee",
      desc: "If we cannot fix your computer, we will fix it again for free or you'll receive a full refund.",
    },
    {
      icon: <BiDollar />,
      title: "Price beat guarantee",
      desc: "Got a quote from another Sydney computer repairs shop? We will beat it by 5%.",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "A greener planet",
      desc: (
        <>
          Repairs help reduce the e-waste problem. We also offer Free{" "}
          <Link href="https://spcecycle.com.au" target="_blank">
            e-waste recycling
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <div className="py-14 max-w-6xl mx-auto sm:px-5 md:px-5 lg:px-5 xl:px-0">
      {location ? (
        <>
          <h3 className="text-3xl text-black font-bold font-sans text-center">
            Why choose Safemode Computer Service
          </h3>
          <p className="text-center py-5">
            What&lsquo;s included when you use our {camelCaseAll(location)}{" "}
            {keyword} services
          </p>
        </>
      ) : null}
      <Slider>
        {sliderItems.map((item, idx) => (
          <div
            className="w-48 sm:w-60 grid grid-cols-1 rounded-lg shadow-md p-4 h-80 sm:h-60 my-5"
            key={idx}
          >
            <span className="text-5xl text-seo-primary">{item.icon}</span>
            <h4 className="text-black text-lg font-bold font-sans pt-2 pb-1">
              {item.title}
            </h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
