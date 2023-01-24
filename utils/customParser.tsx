import Link from "next/link";
import parse, { DOMNode, domToReact } from "html-react-parser";
import { capitalizeFirstLetter } from "utils/formatter";

const customParser = ({
  customContent,
  keyword,
  location,
}: {
  customContent: string | undefined;
  keyword?: string | undefined;
  location?: string | undefined;
}) => {
  if (!customContent) return null;
  // original parser
  const options: any = {
    replace: ({
      name,
      children,
      attribs,
    }: {
      name: string;
      children: DOMNode[];
      attribs: any;
    }) => {
      if (name === "a") {
        return (
          <Link href={attribs.href} target={attribs.target}>
            {domToReact(children, options)}
          </Link>
        );
      }

      if (name === "b") {
        return (
          <span className="font-bold font-sans">
            {domToReact(children, options)}
          </span>
        );
      }

      if (name === "br") {
        return <br />;
      }

      if (name === "keyword") {
        return (
          <>
            {keyword}
            {domToReact(children, options)}
          </>
        );
      }

      if (name === "upperkeyword") {
        return (
          <>
            {capitalizeFirstLetter(keyword as string)}
            {domToReact(children, options)}
          </>
        );
      }

      if (name === "location") {
        return (
          <>
            {location}
            {domToReact(children, options)}
          </>
        );
      }
    },
  };

  return <>{parse(customContent, options)}</>;
};

export default customParser;
