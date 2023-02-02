import Link from "next/link";
import Button from "antd/lib/button";
import { camelCaseAll } from "utils/formatter";

const BusinessDescriptionWithLocation4 = ({
  keyword,
  location,
  total,
}: {
  keyword: string;
  location: string;
  total: number;
}) => {
  return (
    <div className="text-center pb-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-2xl md:text-3xl text-black font-bold ">
        Customers highly recommend Safemode for {camelCaseAll(location)}{" "}
        {keyword}
      </h3>
      <p className="py-5">
        We&apos;ve worked hard to receive a{" "}
        <span className="text-yellow-500">&#x2605;</span> rating 4.4 / 5 (
        {total}) rating on{" "}
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
          {" "}
          True Local
        </Link>
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

export default BusinessDescriptionWithLocation4;
