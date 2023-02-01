import Image from "next/image";
import Button from "antd/lib/button";
import customParser from "utils/customParser";

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
      <div className="flex items-center justify-between max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0 pt-5">
        <div>
          <h2 className="text-3xl md:text-5xl text-white font-bold font-sans text-center">
            {content
              ? customParser({ customContent: content, keyword, location })
              : `Need ${keyword}${location ? ` in ${location}` : ""}?`}
          </h2>
          <div className="flex justify-center gap-10 py-10">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="bg-white text-seo-primary"
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
        <div className="md:block hidden">
          <Image
            src="https://res.cloudinary.com/dn9dk0tls/image/upload/v1674172022/seo-content-generator-mvp/customers-reaching-for-computer-repairs_vam9x6.webp"
            alt="customers-reaching-for-computer-repairs"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
