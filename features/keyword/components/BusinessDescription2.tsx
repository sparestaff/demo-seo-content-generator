import Link from "next/link";
import customParser from "utils/customParser";

const BusinessDescription2 = ({
  keyword,
  location,
  content1,
  content2,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
}) => {
  return (
    <div className="text-center py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h3 className="text-3xl text-black font-bold ">
        {content1
          ? customParser({ customContent: content1, keyword, location })
          : `Same-day ${keyword}`}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content2 ? (
          customParser({ customContent: content2, keyword, location })
        ) : (
          <>
            We are rated in{" "}
            <Link
              href="https://threebestrated.com.au/computer-repair-in-sydney-nsw"
              target={"_blank"}
            >
              Best 3{" "}
            </Link>
            {keyword} centres, from 2016 to 2022! Since 2004, our computer
            technicians have fixed 40,000+ problems on PC computers, laptops,
            Apple Mac for home and small businesses that covered everything from
            removing viruses, to water damage laptop repairs. We are proficient
            with all makes: Dell, Lenovo, HP, Apple, Acer, ASUS, Gigabyte,
            Clevo, Razer, Samsung, Toshiba, Sony and many more.
          </>
        )}
      </p>
    </div>
  );
};

export default BusinessDescription2;
