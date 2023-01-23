import Link from "next/link";
import customParser from "utils/customParser";
import { Location } from "types/Location";

const ServiceAreas = ({
  keyword,
  location,
  content,
}: {
  keyword: string | undefined;
  location?: Location;
  content: string | undefined;
}) => {
  return (
    <div className="bg-gray-100/50 text-center">
      <div className="max-w-6xl mx-auto pt-5 pb-20 mt-10 ">
        <h4 className="text-black text-center font-sans font-bold text-3xl py-5">
          Our {keyword} service areas
        </h4>
        <p>
          {content
            ? customParser({ customContent: content, keyword })
            : `Find ${keyword} in your area`}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 py-10 gap-5">
          {location?.suburbs?.map((suburb, idx) => (
            <Link
              key={idx}
              href={`https://services.safemode.com.au/${keyword}/${suburb}`}
            >
              {keyword} in <span className="capitalize">{suburb}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
