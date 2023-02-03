import Image from "next/image";
import Button from "antd/lib/button";
import { DEFAULT_LOCATION_IMAGE_1 } from "utils/constants";
import { camelCaseAll } from "utils/formatter";
import customParser from "utils/customParser";

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
  image?: string;
}) => {
  return (
    <div className="bg-orange-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 justify-items-center sm:max-w-6xl sm:mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="flex flex-col gap-5 text-center sm:text-left py-16">
          <h1 className="text-4xl lg:text-5xl text-black font-bold ">
            {content1 ? (
              customParser({ customContent: content1, keyword, location })
            ) : (
              <>
                {camelCaseAll(keyword)} {camelCaseAll(location)}
              </>
            )}
          </h1>
          <p className="font-bold text-xl leading-8">
            {content2 ? (
              customParser({ customContent: content2, keyword, location })
            ) : (
              <>
                Same-day {camelCaseAll(keyword)} {camelCaseAll(location)}. Get a
                Free quote on the spot.
              </>
            )}
            <br />
          </p>
          <div>
            <Button
              type="primary"
              size="large"
              shape="round"
              className="h-14 text-xl mt-5"
              href="https://safemode.com.au/quote/"
            >
              <span className="mt-1.5 ">Get a Quick Quote</span>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={image || DEFAULT_LOCATION_IMAGE_1}
            alt={`Same day ${camelCaseAll(location)} ${camelCaseAll(keyword)}`}
            width={450}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithLocation;
