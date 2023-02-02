import Image from "next/image";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";
import { DEFAULT_KEYWORD_IMAGE_5 } from "utils/constants";

const BusinessDescriptionWithLocation2 = ({
  keyword,
  location,
  content5,
  content6,
  image,
}: {
  keyword: string;
  location: string;
  content5: string | undefined;
  content6: string | undefined;
  image?: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col md:flex-row md:justify-between items-center rounded-lg bg-orange-50 p-10">
        <div>
          <Image
            src={image || DEFAULT_KEYWORD_IMAGE_5}
            alt="Why Safemode Computer Service experts are different"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="grid grid-cols-1 content-center gap-5 md:gap-5 w-full md:w-1/2">
          <h3 className="text-3xl text-black font-bold  pt-10">
            {content5
              ? customParser({ customContent: content5, keyword, location })
              : `Why our ${camelCaseAll(
                  String(location)
                )} ${keyword} experts are different`}
          </h3>
          <div className="text-center md:text-left">
            {content6 ? (
              customParser({ customContent: content6, keyword, location })
            ) : (
              <>
                Excellent {keyword} knowledge takes a lot more than good tools.{" "}
                <span className=" font-bold">
                  Experience, good human judgment, and
                  customer-company-employee-supplier relationships
                </span>{" "}
                make the difference.
                <br />
                <br />
                We&apos;ve worked diligently to build efficient in-house testing
                systems, a network of trusted suppliers near{" "}
                {camelCaseAll(location)}, and {keyword} processes for maximum
                results and customer satisfaction. Through years of practice,
                persistence in maintaining excellence in workmanship, we&apos;ve
                fine-tuned our services to ensure our customers leave happy
                knowing their computers are in good hands.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDescriptionWithLocation2;
