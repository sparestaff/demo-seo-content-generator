import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";
import customParser from "utils/customParser";

const ColumnContent2 = ({
  keyword,
  location,
  content1,
  content2,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
}) => {
  if (!content1) return null;
  return (
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col text-center max-w-6xl mx-auto">
      <div>
        <Image
          src={HERO_SECTION_IMAGE}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  text-center w-full sm:w-1/2 py-5 ">
        <h3 className="text-3xl text-black font-bold font-sans">
          {customParser({ customContent: content1, keyword, location })}
        </h3>
        <div>
          {customParser({ customContent: content2, keyword, location })}
        </div>
      </div>
    </div>
  );
};

export default ColumnContent2;
