import Link from "next/link";
import { Location } from "types/Location";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const ServiceAreas = ({
  keyword,
  location,
  locationData,
  regions,
  content,
}: {
  keyword: string | undefined;
  location?: string;
  locationData?: Location;
  regions?: { region: string }[];
  content: string | undefined;
}) => {
  return (
    <div className="bg-gray-100/50 text-center">
      <div className="max-w-6xl mx-auto pt-5 pb-20 mt-10 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <h4 className="text-black text-center  font-bold text-3xl py-5">
          Our {keyword} service areas
        </h4>
        <p>
          {content
            ? customParser({ customContent: content, keyword })
            : location
            ? `We provide ${keyword} services to ${camelCaseAll(
                location
              )} and other areas`
            : `Find ${keyword} in your area`}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 py-10 gap-5">
          {/* {regions?.length
            ? regions.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/${keyword?.replace(/ /g, "-")}/${item.region.replace(
                    / /g,
                    "-"
                  )}`}
                >
                  {keyword} {camelCaseAll(item.region)}
                </Link>
              ))
            : null}
          {locationData?.suburbs?.length
            ? locationData?.suburbs?.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/${keyword?.replace(/ /g, "-")}/${location.replace(
                    / /g,
                    "-"
                  )}`}
                >
                  {keyword} {camelCaseAll(location)}
                </Link>
              ))
                  : null} */}
            { // used ChatGPT to hard-code regions and cities
            [
              { region: "sydney" },
              { region: "melbourne" },
              { region: "inner west sydney" },
              { region: "lower north shore sydney" },
              { region: "western sydney" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/${keyword?.replace(/ /g, "-")}/${item.region.replace(
                  / /g,
                  "-"
                )}`}
              >
                {keyword} {camelCaseAll(item.region)}
              </Link>
            ))}
            {[
              "parramatta",
              "liverpool",
              "penrith",
              "campbelltown",
              "blacktown",
              "castle hill",
              "hornsby",
              "chatswood",
              "bankstown",
              "strathfield",
              "canterbury",
            ].map((location, idx) => (
              <Link
                key={idx}
                href={`/${keyword?.replace(/ /g, "-")}/${location.replace(
                  / /g,
                  "-"
                )}`}
              >
                {keyword} {camelCaseAll(location)}
              </Link>
            ))}            
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
