import Link from "next/link";
import Image from "next/image";
import Slider from "components/elements/Slider";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
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
      src: "https://safemode.com.au/wp-content/uploads/2022/07/computer-repairs-near-me-600x338.webp",
      alt: "computer repairs near me",
      title: "Computer repairs near me”? Don't ask Google, I'll tell you where",
      desc: 'As Google has gotten smarter over the years, users are leveraging "near me" searches',
      link: "https://safemode.com.au/computer-repairs-near-me/",
    },
    {
      src: "https://safemode.com.au/wp-content/uploads/2022/01/slow-apple-computer-600x338.webp",
      alt: "slow apple computer",
      title: "6 Reasons Why My Computer is Slow and How to Troubleshoot",
      desc: "Is your computer slow? or freezes? Trust me, you're not alone. As a professional",
      link: "https://safemode.com.au/fix-slow-computer/",
    },
    {
      src: "https://safemode.com.au/wp-content/uploads/2022/06/repair-or-replace-computer-comparison-600x338.webp",
      alt: "repair or replace computer comparison",
      title: "Should I repair or replace my computer?",
      desc: "As computer technician who has seen so many computers and done thousands of computer",
      link: "https://safemode.com.au/repair-vs-replace-computer/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h4 className="text-black text-center font-bold text-3xl py-5">
        Our top {keyword} tips and tricks
      </h4>
      <p className="text-center">
        {content
          ? customParser({ customContent: content, keyword, location })
          : "Read our best tips and tricks on everything from how to DIY repairs to getting the best bang for your buck."}
      </p>
      <div className="py-10">
        <Slider sm={1} md={2} lg={3} xl={3}>
          {articlesItems.map((item, idx) => (
            <Card
              key={idx}
              hoverable
              className="cursor-pointer h-96 mb-5"
              cover={
                <Image src={item.src} width={200} height={200} alt={item.alt} />
              }
            >
              <Meta
                title={
                  <Link href={item.link} className="whitespace-pre-line">
                    {item.title}
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
