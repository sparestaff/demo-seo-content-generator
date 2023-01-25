import Link from "next/link";
import Image from "next/image";
import { STATIC_IMAGE_1 } from "utils/constants";
import { camelCaseAll } from "utils/formatter";

const ColumnContentWithLocation1 = ({
  keyword,
  location,
}: {
  keyword: string;
  location: string;
}) => {
  return (
    <div className="md:flex md:justify-between md:items-center grid grid-cols-1 justify-items-center  max-w-6xl mx-auto">
      <div className="grid grid-cols-1 content-center sm:gap-10 gap-5 md:w-1/2 w-full px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <h3 className="text-3xl text-black font-bold font-sans text-center md:text-left">
          How it works?
        </h3>
        <div className="flex sm:gap-10 gap-5 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            01.
          </div>
          <div>
            Use our easy{" "}
            <Link href="https://safemode.com.au/book-appointment/">
              online booking
            </Link>{" "}
            to schedule an appointment. Walk-in is also accepted.
          </div>
        </div>
        <div className="flex sm:gap-10 gap-5 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            02.
          </div>
          <div>
            Our {camelCaseAll(location) + " "}
            {keyword} technicians give you a quote for repairs (
            <span className="font-bold font-sans">FREE</span> quote) and
            estimated completion date.
          </div>
        </div>
        <div className="flex sm:gap-10 gap-5 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            03.
          </div>
          <div>
            You decide if you&apos;d like to proceed with our quote
            (obligation-free).
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            04.
          </div>
          <div>
            If the quote is approved, we&apos;ll fix your computer and notify
            you when it&apos;s ready. Our work comes with{" "}
            <Link href="https://safemode.com.au/our-guarantees/">
              guarantees
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src={STATIC_IMAGE_1}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
    </div>
  );
};

export default ColumnContentWithLocation1;
