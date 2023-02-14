import Link from "next/link";
import customParser from "utils/customParser";

const BusinessDescription2 = ({
  keyword,
  location,
  content1,
  content2,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
}) => {
  return (
    <div className="text-center py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold ">
        {content1
          ? customParser({ customContent: content1, keyword, location })
          : `Built by an Australian family, supporting other Australian families`}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content2 ? (
          customParser({ customContent: content2, keyword, location })
        ) : (
          <>
            We are proud to be an award-wining, Australian family owned {keyword} company. From the first phone 
            call to the completion of each project, we'll help you every step along the 
            way. Our {keyword} experts are on call 6 days a week for your immediate assistance.
          </>
        )}
      </p>
    </div>
  );
};

export default BusinessDescription2;
