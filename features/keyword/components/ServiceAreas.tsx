import Link from "next/link";

const ServiceAreas = () => {
  const links = [
    {
      body: "keyword location1",
      link: "http://safemode.com.au/keyword/location1",
    },
    {
      body: "keyword location2",
      link: "http://safemode.com.au/keyword/location2",
    },
    {
      body: "keyword location3",
      link: "http://safemode.com.au/keyword/location3",
    },
    {
      body: "keyword location4",
      link: "http://safemode.com.au/keyword/location4",
    },
  ];
  return (
    <div className="py-20 text-center">
      <h4 className="text-black text-center font-sans font-bold text-3xl py-5">
        ServiceAreas
      </h4>
      <p>Custom content #24 | Find keyword in your area</p>
      <div className="grid grid-cols-4 py-10">
        {links.map((item, idx) => (
          <Link key={idx} href={item.link}>
            {item.body}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;
