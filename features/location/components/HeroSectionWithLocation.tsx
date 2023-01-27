import Image from "next/image";
import Button from "antd/lib/button";
import { DEFAULT_LOCATION_IMAGE_1 } from "utils/constants";
import { camelCaseAll } from "utils/formatter";
import customParser from "utils/customParser";
import { Img } from "types/CustomContent";

const HeroSectionWithLocation = ({
  keyword,
  location,
  content1,
  content2,
  image,
}: {
  keyword: string;
  location: string;
  content1: string | undefined;
  content2: string | undefined;
  image?: Img;
}) => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center grid grid-cols-1 gap-5 sm:gap-0 justify-items-center sm:max-w-6xl sm:mx-auto my-5 sm:my-1 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col gap-5 text-center sm:text-left">
        <h1 className="text-6xl text-black font-bold font-sans">
          {content1 ? (
            customParser({ customContent: content1, keyword, location })
          ) : (
            <span className="capitalize">
              {location} {keyword}
            </span>
          )}
        </h1>
        <p className="font-bold text-xl leading-8">
          {content2 ? (
            customParser({ customContent: content2, keyword, location })
          ) : (
            <>
              Same-day {keyword} {camelCaseAll(location)}. Get a Free quote on
              the spot.
            </>
          )}
          <br />
          {keyword} since 2004.
        </p>
        <div>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="h-14 text-xl"
          >
            Get a Quick Quote
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={image?.src || DEFAULT_LOCATION_IMAGE_1}
          alt={
            image?.alt ||
            `Same day ${camelCaseAll(location)} ${camelCaseAll(keyword)}`
          }
          width={450}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSectionWithLocation;
