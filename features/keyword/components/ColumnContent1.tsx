import Link from "next/link";
import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";

const ColumnContent1 = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="grid grid-cols-1 content-center gap-10 w-1/2">
        <h3 className="text-3xl text-black font-bold font-sans">
          Custom content #7 | How it works
        </h3>
        <div className="flex gap-10 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            01.{" "}
          </div>
          <div>
            Custom content #8 | Use our easy{" "}
            <Link href="https://safemode.com.au/book-appointment/">
              online booking
            </Link>{" "}
            to schedule an appointment. Walk-in is also accepted.
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            02.{" "}
          </div>
          <div>
            Custom content #9 | Our technicians give you a quote for repairs (
            <span className="font-bold font-sans">FREE</span> quote) and
            estimated completion date.
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            03.{" "}
          </div>
          <div>
            Custom content #10 | You decide if you&apos;d like to proceed with
            our quote (obligation-free).
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="text-seo-primary text-3xl font-bold font-sans">
            04.{" "}
          </div>
          <div>
            Custom content #11 | If the quote is approved, we&apos;ll fix your
            computer and notify you when it&apos;s ready. Our work comes with{" "}
            <Link href="https://safemode.com.au/our-guarantees/">
              gearantees
            </Link>
            .
          </div>
        </div>
      </div>
      <div>
        <Image
          src={HERO_SECTION_IMAGE}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
    </div>
  );
};

export default ColumnContent1;
