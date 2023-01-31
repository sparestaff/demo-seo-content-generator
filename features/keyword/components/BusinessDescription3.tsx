import Button from "antd/lib/button";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const BusinessDescription3 = ({
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
    <div className="text-center py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold font-sans">
        {content1 ? (
          customParser({ customContent: content1, keyword, location })
        ) : (
          <>
            We&apos;ve mastered {keyword}
            {location ? ` in ${camelCaseAll(location)}` : null}
          </>
        )}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content2
          ? customParser({ customContent: content2, keyword, location })
          : location
          ? `After thousands of completed ${keyword} services in ${camelCaseAll(
              location
            )} and 40,000+ services overall, done by our own in-house technicians, we're experienced with most computer and IT problems. If we are not the best people to assist you, we'll be happy to refer you to someone who can.`
          : "After 40,000 repairs completed, done by our own in-house technicians, we know computers inside out."}
      </p>
      <div>
        <Button
          type="primary"
          size="large"
          shape="round"
          href="https://safemode.com.au/quote/"
          className="items-center"
        >
          <span className="font-sans">Get a Quick Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription3;
