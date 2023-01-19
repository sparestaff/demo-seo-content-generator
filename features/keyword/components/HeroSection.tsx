import Image from "next/image";
import Button from "antd/lib/button";
import { HERO_SECTION_IMAGE } from "utils/constants";

const HeroSection = ({
  keyword,
  content1,
  content2,
}: {
  keyword: string | undefined;
  content1: string | undefined;
  content2: string | undefined;
}) => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center grid grid-cols-1 justify-items-center sm:max-w-6xl sm:mx-auto my-10 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <div className="flex flex-col gap-5 text-center sm:text-left">
        <h2 className="text-6xl text-black font-bold font-sans">
          {content1 ?? "Rated Best 3"}
          <br />
          {keyword}
        </h2>
        <p className="font-bold text-xl leading-8">
          {content2 ?? "Award-winning, same-day"}
          <br />
          {keyword} since 2004.
        </p>
        <div>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="h-14 text-xl"
          >
            Get a Quick Quote
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={HERO_SECTION_IMAGE}
          alt="computer_repair"
          width={450}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
