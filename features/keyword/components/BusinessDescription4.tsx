import Link from "next/link";
import Button from "antd/lib/button";
import customParser from "utils/customParser";

const BusinessDescription4 = ({
  keyword,
  location,
  content,
  total,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content: string | undefined;
  total?: number;
}) => {
  return (
    <div className="text-center py-20 max-w-6xl mx-auto px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold ">
        Don&apos;t take our word for it
      </h3>
      <p className="py-5 mx-auto">
        {content ? (
          customParser({ customContent: content, keyword, location })
        ) : (
          <>
            Our customers have given us a{" "}
            <span className="text-yellow-500">&#x2605;</span> rating {4.4} (
            {total}) rating on{" "}
            <Link href="https://www.google.com/search?q=safemode+computer+service">
              Google reviews and 4.9/5
            </Link>{" "}
            on{" "}
            <Link
              href={
                "https://www.truelocal.com.au/business/safemode-computer-service/enmore"
              }
            >
              True Local
            </Link>
          </>
        )}
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

export default BusinessDescription4;
