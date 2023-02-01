import Link from "next/link";
import { camelCaseAll } from "utils/formatter";
const BreadCrumbs = ({
  keyword,
  location,
  region,
}: {
  keyword: string;
  location?: string | undefined;
  region?: string;
}) => {
  return (
    <div className="text-center mt-5 mb-10 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      You are here: <Link href="https://safemode.com.au/">Home</Link> /{" "}
      <Link href={`/${keyword}`}>{camelCaseAll(keyword)} </Link>
      {region && location && region.toLowerCase() != location.toLowerCase() ? (
        <>
          /{" "}
          <Link href={`/${keyword}/${region.replace(/ /g, "-")}`}>
            {camelCaseAll(String(region))}
          </Link>
          <span> / {camelCaseAll(location)}</span>
        </>
      ) : region ? (
        ` / ${camelCaseAll(String(region))}`
      ) : location ? (
        ` / ${camelCaseAll(String(location))}`
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
