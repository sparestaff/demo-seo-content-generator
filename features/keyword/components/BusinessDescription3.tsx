import Button from "antd/lib/button";

const BusinessDescription3 = ({
  keyword,
  content12,
  content13,
}: {
  keyword: string | undefined;
  content12: string | undefined;
  content13: string | undefined;
}) => {
  return (
    <div className="text-center py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl text-black font-bold font-sans">
        {content12 ?? <>We&apos;ve mastered {keyword}</>}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content13 ??
          "After 40,000 repairs completed, done by our own in-house technicians, we know computers inside out."}
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
