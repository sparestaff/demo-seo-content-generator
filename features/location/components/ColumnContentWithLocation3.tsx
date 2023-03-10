import Button from "antd/lib/button";
import Image from "next/image";
import { DEFAULT_LOCATION_IMAGE_4 } from "utils/constants";
const ColumnContentWithLocation3 = ({
  keyword,
  image,
}: {
  keyword: string;
  image?: string;
}) => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row	sm:justify-between sm:items-center max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="grid grid-cols-1 content-center gap-5 py-5 sm:gap-10 w-full sm:w-1/2">
          <h3 className="text-3xl text-black font-bold text-center md:text-left py-5 md:py-0">
            How long does it take?
          </h3>
          <div>
            A quote will be given within 1-2 business days. After you&apos;ve
            approved our quote, we will commence work immediately. We carry
            stock for common parts, material to complete most {keyword} on the same
            day. If a part is out of stock, it will need to be ordered in which
            takes 2-5 business days (standard postage) or 1-2 business days
            (express postage) to arrive.
          </div>
        </div>
        <div>
          <Image
            src={image || DEFAULT_LOCATION_IMAGE_4}
            alt={"People waiting for their computers to be fixed"}
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-center">
        <Button
          type="primary"
          size="large"
          shape="round"
          href="https://safemode.com.au/quote/"
          className="items-center"
        >
          Get a Quick Quote
        </Button>
      </div>
    </>
  );
};

export default ColumnContentWithLocation3;
