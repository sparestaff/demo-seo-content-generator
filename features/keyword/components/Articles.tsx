import Link from "next/link";
import Image from "next/image";
import Slider from "components/elements/Slider";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import { LENOVO_IMAGE, DELL_IMAGE, APPLE_RESCUE_IMAGE } from "utils/constants";
import customParser from "utils/customParser";

const { Meta } = Card;

const Articles = ({
  keyword,
  location,
  content,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content: string | undefined;
}) => {
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
    <div className="max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h4 className="text-black text-center font-sans font-bold text-2xl md:text-3xl py-5">
        Our top computer tips and tricks
      </h4>
      <p className="text-center">
        {content
          ? customParser({ customContent: content, keyword, location })
          : "Read our best tips and tricks on everything from computer tuneup to how to DIY upgrade your own computer."}
      </p>
      <div className="py-10">
        <Slider sm={1} md={2} lg={3} xl={3}>
          {articlesItems.map((item, idx) => (
            <Card
              key={idx}
              hoverable
              className="cursor-pointer h-80 mb-5"
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
        </Slider>
      </div>
      <div className="flex justify-center">
        <Button
          type="primary"
          shape="round"
          className="bg-transparent text-seo-primary hover:text-white"
          href="https://safemode.com.au/blog/"
        >
          See all articles
        </Button>
      </div>
    </div>
  );
};

export default Articles;
