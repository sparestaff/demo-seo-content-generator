import Image from "next/image";
import Button from "antd/lib/button";
import { HERO_SECTION_IMAGE } from "utils/constants";

const HeroSection = () => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center grid grid-cols-1 justify-items-center max-w-6xl mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="text-6xl text-black font-bold font-sans">
          Custom content #1 |<br />
          Rated Best 3<br />
          Keyword
        </h2>
        <p className="font-bold text-xl leading-8">
          Custom Content #2 | Award-winning, same-day <br />
          keyword since 2004.
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
