import Link from "next/link";
import Button from "antd/lib/button";
import { camelCaseAll } from "utils/formatter";

const BusinessDescriptionWithLocation4 = ({
  keyword,
  location,
  total,
  average,
}: {
  keyword: string;
  location: string;
  total: number;
  average: number;
}) => {
  return (
    <div className="text-center pb-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold font-sans">
        Customers highly recommend Safemode for {camelCaseAll(location)}{" "}
        {keyword}
      </h3>
      <p className="py-5 mx-auto">
        We&apos;ve worked hard to receive a{" "}
        <span className="text-yellow-500">&#x2605;</span> rating{" "}
        {average?.toFixed(1)} / 5 ({total}) rating on{" "}
        <Link
          href="https://www.google.com/search?q=safemode+computer+service"
          target={"_blank"}
        >
          Google reviews
        </Link>{" "}
        and 4.9/5 on
        <Link
          href="https://www.truelocal.com.au/business/safemode-computer-service/enmore"
          target={"_blank"}
        >
          True Local
        </Link>
      </p>
      <div>
        <Button
          type="primary"
          size="large"
          shape="round"
          href="https://safemode.com.au/quote/"
        >
          Get a Quick Quote
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescriptionWithLocation4;
