import Image from "next/image";
import Button from "antd/lib/button";
import { DEFAULT_KEYWORD_IMAGE_1 } from "utils/constants";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const HeroSection = ({
  keyword,
  content1,
  content2,
  image,
}: {
  keyword: string;
  location?: string;
  content1: string | undefined;
  content2: string | undefined;
  image?: string;
}) => {
  return (
    <div className="bg-orange-50">
      <div className="grid sm:grid-cols-2 grid-cols-1 justify-items-center  sm:max-w-6xl sm:mx-auto py-10 sm:py-0 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0 ">
        <div className="flex flex-col gap-5 text-center sm:text-left py-16">
          <h1 className="text-4xl lg:text-5xl text-black font-bold">
            <span className="leading-tight">
              {content1
                ? customParser({ customContent: content1, keyword })
                : `Rated Best 3 ${camelCaseAll(keyword)}`}
            </span>
          </h1>
          <p className="font-bold text-xl leading-8">
            {content2
              ? customParser({ customContent: content2, keyword })
              : `Award-winning, same-day ${keyword} since 2004.`}
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
        <div className="self-end">
          <Image
            src={image || DEFAULT_KEYWORD_IMAGE_1}
            alt={`Same day ${keyword} IT services`}
            width={450}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
