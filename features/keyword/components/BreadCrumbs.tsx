import Link from "next/link";
import { camelCaseAll, capitalizeFirstLetter } from "utils/formatter";
const BreadCrumbs = ({
  keyword,
  location,
  region,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  region?: string;
}) => {
  return (
    <div className="text-center mt-5 mb-10 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      You are here: <Link href="https://safemode.com.au/">Home</Link> /{" "}
      {keyword}
      {region ? ` / ${camelCaseAll(region)}` : null}
      {location ? ` / ${capitalizeFirstLetter(location)}` : null}
    </div>
  );
};

export default BreadCrumbs;
