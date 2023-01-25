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
    <div className="text-center py-5">
      You are here: <Link href="https://safemode.com.au/">Home</Link> /{" "}
      {keyword}
      {location ? ` / ${camelCaseAll(location)}` : null}
    </div>
  );
};

export default BreadCrumbs;
