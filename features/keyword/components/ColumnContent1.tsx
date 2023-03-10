import Link from "next/link";
import Image from "next/image";
import { DEFAULT_KEYWORD_IMAGE_2 } from "utils/constants";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const ColumnContent1 = ({
  keyword,
  location,
  content1,
  content2,
  content3,
  content4,
  content5,
  image,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1?: string | undefined;
  content2?: string | undefined;
  content3?: string | undefined;
  content4?: string | undefined;
  content5?: string | undefined;
  image?: string;
}) => {
  return (
    <div className="md:flex md:justify-between md:items-center grid grid-cols-1 gap-5 md:gap-0 justify-items-center max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="grid grid-cols-1 content-center sm:gap-10 gap-5 md:w-1/2 w-full">
        <h3 className="text-3xl text-black font-bold  text-center md:text-left py-5 md:py-0">
          {content1
            ? customParser({ customContent: content1, keyword, location })
            : "How it works?"}
        </h3>
        <div className="flex sm:gap-10 gap-5">
          <div className="text-seo-primary text-3xl font-bold tracking-widest">
            01.
          </div>
          <div>
            {content2 ? (
              customParser({ customContent: content2, keyword, location })
            ) : (
              <>
                Use our easy{" "}
                <Link href="https://safemode.com.au/book-appointment/">
                  online booking
                </Link>{" "}
                to schedule an appointment. Or, simply give us a call.
              </>
            )}
          </div>
        </div>
        <div className="flex sm:gap-10 gap-5">
          <div className="text-seo-primary text-3xl font-bold ">02.</div>
          <div>
            {content3 ? (
              customParser({ customContent: content3, keyword, location })
            ) : (
              <>
                Our {location && camelCaseAll(location) + " "}
                {keyword} team will provide an initial consultation for 
                total costs and estimated completion date.
              </>
            )}
          </div>
        </div>
        <div className="flex sm:gap-10 gap-5">
          <div className="text-seo-primary text-3xl font-bold ">03.</div>
          <div>
            {content4 ? (
              customParser({ customContent: content4, keyword, location })
            ) : (
              <>
                You decide if you&apos;d like to proceed with our quote
                (obligation-free).
              </>
            )}
          </div>
        </div>
        <div className="flex sm:gap-10 gap-5">
          <div className="text-seo-primary text-3xl font-bold ">04.</div>
          <div>
            {content5 ? (
              customParser({ customContent: content5, keyword, location })
            ) : (
              <>
                If the quote is approved, we&apos;ll proceed with the work and
                keep you updated every step along the way. Our work comes with{" "}
                <Link href="https://safemode.com.au/our-guarantees/">
                  guarantees
                </Link>
                .
              </>
            )}
          </div>
        </div>
      </div>
      <div className="order-first md:order-none">
        <Image
          src={image || DEFAULT_KEYWORD_IMAGE_2}
          alt={`How to use our ${keyword} services`}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ColumnContent1;
