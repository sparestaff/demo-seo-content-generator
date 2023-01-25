import Image from "next/image";
import { DEFAULT_IMAGE_3 } from "utils/constants";
const ColumnContentWithLocation3 = ({
  keyword,
  location,
  image,
}: {
  keyword: string;
  location: string;
  image?: string;
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row	text-center sm:justify-between sm:items-center max-w-6xl mx-auto pb-10">
      <div className="grid grid-cols-1 content-center gap-5 py-5 sm:gap-10 w-full sm:w-1/2">
        <h3 className="text-3xl text-black font-bold font-sans">
          How long does it take?
        </h3>
        <div>
          A quote is given on the spot while you wait. After you&apos;ve
          approved our quote, we will commence work immediately. We carry stock
          for common spare parts to complete most {keyword} on the same day. If
          a part is out of stock, it will need to be ordered in which takes 2-5
          business days (standard postage) or 1-2 business days (express
          postage) to arrive.
        </div>
      </div>
      <div>
        <Image
          src={image || DEFAULT_IMAGE_3}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
    </div>
  );
};

export default ColumnContentWithLocation3;
