import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";
import customParser from "utils/customParser";

const ColumnContent4 = ({
  keyword,
  location,
  content18,
  content19,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content18: string | undefined;
  content19: string | undefined;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col md:flex-row md:justify-between items-center rounded-lg bg-orange-50 p-10">
        <div>
          <Image
            src={HERO_SECTION_IMAGE}
            width={400}
            height={400}
            priority
            alt="custom_upload_image_1"
          />
        </div>
        <div className="grid grid-cols-1 content-center gap-5 md:gap-10 w-full md:w-1/2">
          <h3 className="text-3xl text-black font-bold font-sans text-center py-10">
            Why our {keyword} experts are different
            {content18
              ? customParser({ customContent: content18, keyword, location })
              : `Why our ${keyword} experts are different`}
          </h3>
          <div className="text-center">
            {content19 ? (
              customParser({ customContent: content19, keyword, location })
            ) : (
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnContent4;
