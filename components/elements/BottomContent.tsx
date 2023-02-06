import Image from "next/image";
import Button from "antd/lib/button";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const BottomContent = ({
  keyword,
  location,
  content,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content?: string | undefined;
}) => {
  return (
    <div className="bg-seo-primary">
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:justify-between justify-items-center items-center
        max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0 pt-10 md:pt-5"
      >
        <div>
          <p className="text-4xl md:text-5xl text-white font-bold text-center">
            <span className="leading-tight">
              {content
                ? customParser({ customContent: content, keyword, location })
                : `Need ${keyword}${
                    location ? ` in ${camelCaseAll(location)}` : ""
                  }?`}
            </span>
          </p>
          <div className="flex justify-center gap-3 md:gap-10 py-5 md:py-10">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="bg-white text-seo-primary"
              href="https://safemode.com.au/quote/"
            >
              Get quotes
            </Button>
            <Button
              href="tel:1800858382"
              type="primary"
              shape="round"
              size="large"
              className="bg-transparent border-white text-white"
            >
              Call: 1800 85 83 82
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dn9dk0tls/image/upload/v1674172022/seo-content-generator-mvp/customers-reaching-for-computer-repairs_vam9x6.webp"
            alt="customers reaching for computer repairs"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
