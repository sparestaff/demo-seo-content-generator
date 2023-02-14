import Button from "antd/lib/button";
import customParser from "utils/customParser";

const BusinessDescription = ({
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
  return (
    <div className="text-center max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h2 className="text-3xl text-black font-bold ">
        {content1
          ? customParser({ customContent: content1, keyword, location })
          : `Top rated ${keyword} since 2004`}
      </h2>
      <p className="py-5 w-4/5 mx-auto">
        {content2
          ? customParser({ customContent: content2, keyword, location })
          : `[Your Company] is your trusted ${keyword}
        in Sydney. Our experienced ${keyword} experts have helped thousands
        of home and business customers, from small to large projects.
        That's why 9.4/10 customers recommend [Your Company] to
        their friends and family.`}
      </p>
      <div>
        <Button
          type="primary"
          size="large"
          shape="round"
          href="https://safemode.com.au/quote/"
          className="items-center "
        >
          <span className="">Get a Quick Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription;
