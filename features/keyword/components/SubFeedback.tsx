import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

const SubFeedback = () => {
  const items = [
    {
      reviewer: "reviewer1",
    },
    {
      reviewer: "reviewer2",
    },
    {
      reviewer: "reviewer3",
    },
  ];
  return (
    <div className="py-10 my-10 bg-gray-100/50 px-">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        {items.map((item, idx) => (
          <div
            className="grid grid-cols-1 gap-5 bg-white rounded shadow px-5 py-10"
            key={idx}
          >
            <p className="text-lg font-bold font-sans">{item.reviewer}</p>
            <span className="text-2xl text-yellow-500">
              <ImQuotesLeft />
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type…
            </p>
            <div className="flex gap-1 text-yellow-500 text-2xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubFeedback;
