import Image from "next/image";
import {
  BEST_COMPUTER_ONE,
  BEST_COMPUTER_TWO,
  BEST_COMPUTER_THREE,
  BEST_COMPUTER_FOUR,
  BEST_COMPUTER_FIVE,
} from "utils/constants";

const images = [
  {
    src: BEST_COMPUTER_ONE,
    alt: "best-computer-1",
  },
  {
    src: BEST_COMPUTER_TWO,
    alt: "best-computer-2",
  },
  {
    src: BEST_COMPUTER_THREE,
    alt: "best-computer-3",
  },
  {
    src: BEST_COMPUTER_FOUR,
    alt: "best-computer-4",
  },
  {
    src: BEST_COMPUTER_FIVE,
    alt: "best-computer-5",
  },
];

const Rates = () => {
  return (
    <div className="bg-gray-100/50">
      <div className="max-w-6xl mx-auto flex sm:flex-row flex-col justify-between items-center py-10 gap-3 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="text-lg font-bold font-sans">We&apos;re rated in:</div>
        <div className="flex items-center sm:justify-evenly sm:w-4/5 w-full gap-3">
          {images.map((item, idx) => (
            <div key={idx}>
              <Image src={item.src} alt={item.alt} width={120} height={120} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rates;
