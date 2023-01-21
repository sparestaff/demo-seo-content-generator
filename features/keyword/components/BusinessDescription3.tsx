import Button from "antd/lib/button";
import customParser from "utils/customParser";

const BusinessDescription3 = ({
  keyword,
  location,
  content12,
  content13,
}: {
  keyword: string | undefined;
  location: string | undefined;
  content12: string | undefined;
  content13: string | undefined;
}) => {
  return (
    <div className="text-center py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl text-black font-bold font-sans">
        {content12 ? (
          customParser({ customContent: content12, keyword, location })
        ) : (
          <>We&apos;ve mastered {keyword}</>
        )}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content13
          ? customParser({ customContent: content13, keyword, location })
          : "After 40,000 repairs completed, done by our own in-house technicians, we know computers inside out."}
      </p>
      <div>
        <Button type="primary" size="large" shape="round">
          Get a Quick Quote
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription3;
