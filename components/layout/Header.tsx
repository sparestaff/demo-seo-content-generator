import { useRouter } from "next/router";
import Head from "next/head";
import { camelCaseAll } from "utils/formatter";

const Header = ({
  keyword,
  location,
}: {
  keyword?: string;
  location?: string;
}) => {
  const currentYear = new Date().getFullYear();
  return (
    <Head>
      <title>{`Same-day ${keyword && keyword}${
        location ? " " + camelCaseAll(location) : ""
      }. Top Rated Services in ${currentYear} - Your Company`}</title>
      <meta name="description" content="Developed by Safemode" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="title"
        content={`Same-day ${keyword && keyword}${
          location ? " " + camelCaseAll(location) : ""
        }. Top Rated Services in ${currentYear} - Your Company`}
      />
      <meta
        property="og:title"
        content={`${keyword}${location ? " " + camelCaseAll(location) : ""}`}
      />
      <meta
        name="description"
        content={`Your company is top rated in Australia from 2010 to ${currentYear} for ${keyword}${
          location ? " " + camelCaseAll(location) : ""
        }. Award-wining, same-day services. Call Now for Free quote.`}
      />
      <meta
        property="og:description"
        content={`Your company is top rated in Australia from 2010 to ${currentYear} for ${keyword}${
          location ? " " + camelCaseAll(location) : ""
        }. Award-wining, same-day services. Call Now for Free quote.`}
      />
      <link
        rel="icon"
        href="https://safemode.com.au/wp-content/uploads/2021/02/favicon-64.png"
      />
    </Head>
  );
};

export default Header;
