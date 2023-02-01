import Image from "next/image";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";
import { DEFAULT_KEYWORD_IMAGE_2 } from "utils/constants";

const BusinessDescriptionWithLocation2 = ({
  keyword,
  location,
  content5,
  content6,
  image,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content5: string | undefined;
  content6: string | undefined;
  image?: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col md:flex-row md:justify-between items-center rounded-lg bg-orange-50 p-10">
        <div>
          <Image
            src={image || DEFAULT_KEYWORD_IMAGE_2}
            alt="Why Safemode Computer Service experts are different"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="grid grid-cols-1 content-center gap-5 md:gap-5 w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl text-black font-bold font-sans text-center py-10">
            {content5
              ? customParser({ customContent: content5, keyword, location })
              : `Why our ${camelCaseAll(
                  String(location)
                )} ${keyword} experts are different`}
          </h3>
          <div className="text-center">
            {content6 ? (
              customParser({ customContent: content6, keyword, location })
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

export default BusinessDescriptionWithLocation2;
