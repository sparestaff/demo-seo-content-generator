import Image from "next/image";
import { DEFAULT_IMAGE_2 } from "utils/constants";

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
    <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col max-w-6xl mx-auto py-20 px-5">
      <div className="hidden md:block">
        <Image
          src={image || DEFAULT_IMAGE_2}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  w-full sm:w-1/2 py-5 ">
        <h3 className="text-3xl text-black font-bold font-sans text-center md:text-left">
          How much does it cost for {keyword} in {location}?
        </h3>
        <div>
          The price varies depending what&apos;s required for your {keyword},
          make and model of your computer. We can also tailor a quote for each
          customer in {location} according to individual needs. <br />
          <br />
          Generally if your computer has software issue (i.e. virus), it may
          cost $100-$200. If your computer has hardware issue (i.e. broken
          screen), it will incur cost for labour and spare part which varies
          $200-$400+. Some high-end parts may cost $1,000+. The more expensive
          your computer is, the more expensive it costs to repair.
          <br />
          <br /> The prices are generic indicators and should be used as a guide
          only. This information does not constitute a fixed quote.
        </div>
      </div>
    </div>
  );
};

export default ColumnContentWithLocation2;
