import Image from "next/image";
import { Img } from "types/CustomContent";
import { DEFAULT_KEYWORD_IMAGE_3 } from "utils/constants";
import customParser from "utils/customParser";

const ColumnContentWithLocation5 = ({
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
  image?: Img;
}) => {
  if (!content1) return null;
  return (
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col text-center max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div>
        <Image
          src={image?.src || DEFAULT_KEYWORD_IMAGE_3}
          alt={image?.alt || "A computer technician fixing computers"}
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  text-center sm:text-left w-full sm:w-1/2 py-5 ">
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

export default ColumnContentWithLocation5;
