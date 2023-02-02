import Image from "next/image";
import { DEFAULT_KEYWORD_IMAGE_4 } from "utils/constants";
import customParser from "utils/customParser";

const ColumnContent3 = ({
  keyword,
  location,
  content1,
  content2,
  image,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
  image?: string;
}) => {
  if (!content1) return null;
  return (
    <div className="flex flex-col-reverse sm:flex-row	text-center md:text-left sm:justify-between sm:items-center max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="grid grid-cols-1 content-center gap-5 py-5 sm:gap-10 w-full sm:w-1/2">
        <h3 className="text-2xl md:text-3xl text-black font-bold ">
          {customParser({ customContent: content1, keyword, location })}
        </h3>
        <div>
          {customParser({ customContent: content2, keyword, location })}
        </div>
      </div>
      <div>
        <Image
          src={image || DEFAULT_KEYWORD_IMAGE_4}
          alt={"A computer technician providing support to customers"}
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default ColumnContent3;
