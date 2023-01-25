import Link from "next/link";
const ContactBanner = () => {
  return (
    <div className="bg-seo-primary py-3 shadow">
      <div className="max-w-6xl mx-auto text-white font-extrabold px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <Link href={"tel:1800858382"} className="text-white">
          1800 85 83 82
        </Link>{" "}
        | After hours:{" "}
        <Link href={"tel:0434292527"} className="text-white">
          0434 29 25 27
        </Link>{" "}
        |{" "}
        <Link href={"mailto:info@safemode.com.au"} className="text-white">
          info@safemode.com.au
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
