import Link from "next/link";
import { camelCaseAll } from "utils/formatter";
const BreadCrumbs = ({
  keyword,
  location,
}: {
  keyword: string | undefined;
  location?: string | undefined;
}) => {
  return (
    <div className="text-center mt-5 mb-10 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      You are here: <Link href="https://safemode.com.au/">Home</Link> /{" "}
      {keyword}
      {location ? ` / ${camelCaseAll(location)}` : null}
    </div>
  );
};

export default BreadCrumbs;
