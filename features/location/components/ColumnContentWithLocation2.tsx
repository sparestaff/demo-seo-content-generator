import Image from "next/image";
import { DEFAULT_LOCATION_IMAGE_3 } from "utils/constants";
import { camelCaseAll } from "utils/formatter";

const ColumnContentWithLocation2 = ({
  keyword,
  location,
  image,
}: {
  keyword: string;
  location: string;
  image?: string;
}) => {
  return (
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div>
        <Image
          src={image || DEFAULT_LOCATION_IMAGE_3}
          alt={`Woman browsing price for ${keyword} in ${camelCaseAll(
            location
          )}`}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  w-full sm:w-1/2 py-5 ">
        <h3 className="text-3xl text-black font-bold  text-center md:text-left py-5 md:py-5">
          How much does it cost for {keyword} in {camelCaseAll(location)}?
        </h3>
        <div>
          The price varies depending what&apos;s required for your {keyword},
          project. We can also tailor a quote for each
          customer in {camelCaseAll(location)} according to individual needs.{" "}
          <br />
          <br />
          Generally if your project is one-off that involves minor work, it may
          cost $100-$200. If the work requires additional materials, parts for
          installation, it will incur cost for labour and the material which varies
          $200-$400+. Some high-end parts may cost $1,000+. Our experienced
          service team will be able to provide you with an estimate after the initial consultation.
          <br />
          <br /> The prices are generic indicators and should be used as a guide
          only. This information does not constitute a fixed quote.
        </div>
      </div>
    </div>
  );
};

export default ColumnContentWithLocation2;
