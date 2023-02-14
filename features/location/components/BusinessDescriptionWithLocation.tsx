import Button from "antd/lib/button";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const BusinessDescription = ({
  keyword,
  location,
  content3,
  content4,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content3: string | undefined;
  content4: string | undefined;
}) => {
  return (
    <div className="text-center max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold ">
        {content3
          ? customParser({ customContent: content3, keyword, location })
          : `Quality ${camelCaseAll(String(location))} ${keyword} since 2010`}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content4
          ? customParser({ customContent: content4, keyword, location })
          : `[Your Company] in ${keyword} services for both home and businesses, small to large projects. Since 2010, we have been providing ${keyword} services for thousands of customers in ${camelCaseAll(
              String(location)
            )}. That's why 9.4/10 customers recommend [Your Company] to their friends and family.`}
      </p>
      <div>
        <Button
          type="primary"
          size="large"
          shape="round"
          href="https://safemode.com.au/quote/"
          className="items-center"
        >
          <span className="">Get a Quick Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription;
