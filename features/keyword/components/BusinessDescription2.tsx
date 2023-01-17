import Link from "next/link";

const BusinessDescription2 = () => {
  return (
    <div className="text-center py-20">
      <h3 className="text-3xl text-black font-bold font-sans">
        Custom content #5 | Same-day keyword
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        Custom content #6 | We are rated in{" "}
        <Link
          href="https://threebestrated.com.au/computer-repair-in-sydney-nsw"
          target={"_blank"}
        >
          Best 3
        </Link>{" "}
        keyword centres, from 2016 to 2022! Since 2004, our computer technicians
        have fixed 40,000+ problems on PC computers, laptops, Apple Mac for home
        and small businesses that covered everything from removing viruses, to
        water damage laptop repairs. We are proficient with all makes: Dell,
        Lenovo, HP, Apple, Acer, ASUS, Gigabyte, Clevo, Razer, Samsung, Toshiba,
        Sony and many more.
      </p>
    </div>
  );
};

export default BusinessDescription2;