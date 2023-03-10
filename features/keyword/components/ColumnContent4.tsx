import Image from "next/image";
import { DEFAULT_KEYWORD_IMAGE_5 } from "utils/constants";
import customParser from "utils/customParser";

const ColumnContent4 = ({
  keyword,
  location,
  content1,
  content2,
  image,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
  image?: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col md:flex-row md:justify-between items-center rounded-lg bg-orange-50 p-10 gap-5 md:gap-0">
        <div>
          <Image
            src={image || DEFAULT_KEYWORD_IMAGE_5}
            alt={"Why Safemode Computer Service experts are different"}
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 content-center gap-5 md:gap-10 w-full md:w-1/2">
          <h3 className="text-3xl text-black font-bold  text-center md:text-left py-5 md:py-0">
            {content1
              ? customParser({ customContent: content1, keyword, location })
              : `Why our ${keyword} experts are different`}
          </h3>
          <div>
            {content2 ? (
              customParser({ customContent: content2, keyword, location })
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
                We&apos;ve worked diligently to build efficient in-house service
                team, a network of trusted suppliers, and {keyword} processes
                for maximum results and customer satisfaction. Through years of
                practice, persistence in maintaining excellence in workmanship,
                we&apos;ve fine-tuned our services to ensure our customers leave
                happy knowing they are in good hands.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnContent4;
