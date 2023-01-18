import Link from "next/link";
import Image from "next/image";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import { LENOVO_IMAGE, DELL_IMAGE, APPLE_RESCUE_IMAGE } from "utils/constants";

const { Meta } = Card;

const Articles = () => {
  const articlesItems = [
    {
      src: LENOVO_IMAGE,
      alt: "lenovo think pad",
      title: "Lenovo Laptop Computer Repairs",
      desc: "Lenovo is a popular brand for home and business",
      link: "https://safemode.com.au/lenovo-computer-repairs/",
    },
    {
      src: DELL_IMAGE,
      alt: "dell lap top",
      title: "Dell Laptop Computer Repairs",
      desc: "Dell is one of the leading computer PC makers. They",
      link: "https://safemode.com.au/dell-computer-repairs/",
    },
    {
      src: APPLE_RESCUE_IMAGE,
      alt: "apple laptop rescue",
      title:
        "Apple Laptop Rescue 101: All You Need to Know to Rescue Your Apple Laptop",
      desc: "Are you looking for Apple laptop rescue for your Mac",
      link: "https://safemode.com.au/apple-laptop-rescue/",
    },
  ];

  return (
    <>
      <h4 className="text-black text-center font-sans font-bold text-3xl py-5">
        Our top computer tips and tricks
      </h4>
      <p>
        Custom content #23 | Read our best tips and tricks on everything from
        computer tuneup to how to DIY upgrade your own computer.
      </p>
      <div className="grid grid-cols-3 gap-10 py-10">
        {articlesItems.map((item, idx) => (
          <Card
            key={idx}
            hoverable
            cover={
              <Image src={item.src} width={200} height={200} alt={item.alt} />
            }
          >
            <Meta
              title={
                <Link href={item.link} className="font-sans">
                  {item.desc}
                </Link>
              }
              description={item.desc}
            />
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          type="default"
          shape="round"
          href="https://safemode.com.au/blog/"
        >
          See all articles
        </Button>
      </div>
    </>
  );
};

export default Articles;
