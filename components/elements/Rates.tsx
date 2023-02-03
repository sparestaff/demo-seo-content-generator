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
    alt: "top 3 computer repairs shop sydney award 2019",
    title: "Top 3 computer repairs shop sydney award 2019",
  },
  {
    src: BEST_COMPUTER_TWO,
    alt: "top 3 computer repairs shop sydney award 2020",
    title: "Top 3 computer repairs shop sydney award 2020",
  },
  {
    src: BEST_COMPUTER_THREE,
    alt: "top 3 computer repairs shop sydney award 2021",
    title: "Top 3 computer repairs shop sydney award 2021",
  },
  {
    src: BEST_COMPUTER_FOUR,
    alt: "top 3 computer repairs shop sydney award 2022",
    title: "Top 3 computer repairs shop sydney award 2022",
  },
  {
    src: BEST_COMPUTER_FIVE,
    alt: "best computer repairs shop sydney award 2022",
    title: "Best computer repairs shop sydney award 2022",
  },
];

const Rates = () => {
  return (
    <div className="bg-gray-100/50">
      <div className="max-w-6xl mx-auto flex sm:flex-row flex-col justify-between items-center py-10 gap-3 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="text-lg font-bold ">We&apos;re rated in:</div>
        <div className="flex items-center flex-wrap justify-center sm:flex-nowrap	sm:justify-evenly sm:w-4/5 w-full sm:gap-3">
          {images.map((item, idx) => (
            <div key={idx}>
              <Image
                src={item.src}
                alt={item.alt}
                title={item.title}
                width={115}
                height={115}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rates;
