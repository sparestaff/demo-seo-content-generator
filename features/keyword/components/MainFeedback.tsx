import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
const MainFeedback = ({ content21 }: { content21: string | undefined }) => {
  return (
    <div className="max-w-6xl mx-auto mb-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center md:justify-between items-center bg-seo-primary rounded-lg px-5">
        <div className="grid grid-cols-1 content-center gap-5 w-full sm:w-1/2">
          <span className="text-4xl text-yellow-500">
            <ImQuotesLeft />
          </span>
          <p className="text-white">
            {content21 ??
              `Hard-drive in my good 'ol faithful HP died,
            Safemode Computer Service (SCS) was recommended to me by another
            repair company that were unable to assist me. SCS were extremely
            helpful and able to schedule in immediately. They provided
            comprehensive quote upfront and completed the job ahead of schedule.
            Very happy with the service they provided.`}
            <br />
            <br />— Julie Davies
          </p>
          <div className="flex gap-1 text-yellow-500 text-4xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div>
          <Image
            src={HERO_SECTION_IMAGE}
            width={400}
            height={400}
            priority
            alt="custom_upload_image_1"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFeedback;
