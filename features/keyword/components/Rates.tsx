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
    <div className="flex flex-row justify-between items-center px-6 py-5 bg-gray-100/50 -mx-6">
      <div className="text-lg font-bold">We&apos;re rated in:</div>
      <div className="flex items-center justify-evenly w-4/5">
        {images.map((item, idx) => (
          <div key={idx}>
            <Image src={item.src} alt={item.alt} width={80} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
