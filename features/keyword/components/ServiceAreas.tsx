import Link from "next/link";

const ServiceAreas = ({
  keyword,
  content24,
}: {
  keyword: string | undefined;
  content24: string | undefined;
}) => {
  const links = [
    {
      body: `${keyword} location1`,
      link: `http://safemode.com.au/${keyword}/location1`,
    },
    {
      body: `${keyword} location2`,
      link: `http://safemode.com.au/${keyword}/location2`,
    },
    {
      body: `${keyword} location3`,
      link: `http://safemode.com.au/${keyword}/location3`,
    },
    {
      body: `${keyword} location4`,
      link: `http://safemode.com.au/${keyword}/location4`,
    },
  ];
  return (
    <div className="bg-gray-100/50 text-center">
      <div className="max-w-6xl mx-auto pt-5 pb-20 mt-10 ">
        <h4 className="text-black text-center font-sans font-bold text-3xl py-5">
          Service areas
        </h4>
        <p>{content24 ?? `Find ${keyword} in your area`}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 py-10 gap-5">
          {links.map((item, idx) => (
            <Link key={idx} href={item.link}>
              {item.body}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
