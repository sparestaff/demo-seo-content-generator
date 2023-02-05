import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import customParser from "utils/customParser";

const MainFeedback = ({
  keyword,
  location,
  content,
}: {
  keyword: string;
  location?: string;
  content?: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto mb-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center md:justify-between items-center bg-seo-primary rounded-lg px-10">
        <div className="grid grid-cols-1 content-center gap-5 w-full sm:w-1/2">
          <span className="text-4xl text-yellow-500">
            <ImQuotesLeft />
          </span>
          <p className="text-white">
            {content
              ? customParser({ customContent: content, keyword, location })
              : `Hard-drive in my good 'ol faithful HP died,
            Safemode Computer Service (SCS) was recommended to me by another
            repair company that were unable to assist me. SCS were extremely
            helpful and able to schedule in immediately. They provided
            comprehensive quote upfront and completed the job ahead of schedule.
            Very happy with the service they provided.`}
          </p>
          <div className="flex gap-1 text-yellow-500 text-4xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={
              "https://res.cloudinary.com/dn9dk0tls/image/upload/v1674170965/seo-content-generator-mvp/customer-testimonial_lyodty.webp"
            }
            width={300}
            height={300}
            loading="lazy"
            alt="customer testimonial"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFeedback;
