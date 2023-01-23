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
    <div className="text-center max-w-6xl mx-auto">
      <h3 className="text-3xl text-black font-bold font-sans">
        {content1
          ? customParser({ customContent: content1, keyword, location })
          : `Top rated ${keyword} since 2004`}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content2
          ? customParser({ customContent: content2, keyword, location })
          : `Safemode Computer Service is your trusted ${keyword}
        and IT services in Sydney. Our computer technicians have fixed thousands
        of problems on PC computers, Apple Mac for home and small businesses.
        That's why 9.4/10 customers recommend Safemode Computer Service to
        their friends and family.`}
      </p>
      <div>
        <Button type="primary" size="large" shape="round">
          Get a Quick Quote
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription;
