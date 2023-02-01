import Button from "antd/lib/button";
import { camelCaseAll } from "utils/formatter";

const BusinessDescriptionWithLocation3 = ({
  keyword,
  location,
}: {
  keyword: string | undefined;
  location: string;
}) => {
  return (
    <div className="text-center pt-10 pb-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-2xl md:text-3xl text-black font-bold font-sans">
        We&apos;ve mastered {keyword} in {camelCaseAll(location)}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        After thousands of completed {keyword} services in {location} and
        40,000+ services overall, done by our own in-house technicians,
        we&apos;re experienced with most computer and IT problems. If we are not
        the best people to assist you, we&apos;ll be happy to refer you to
        someone who can.
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

export default BusinessDescriptionWithLocation3;
