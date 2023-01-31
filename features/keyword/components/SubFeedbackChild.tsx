import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { Review } from "types/Review";

const SubFeedbackChild = ({ review }: { review: Review }) => {
  const [showMore, setShowMore] = useState(false);

  const readMore = ({
    content,
    wordLimit,
    showMore,
    setShowMore,
  }: {
    content: string;
    wordLimit: number;
    showMore: boolean;
    setShowMore: (showMore: boolean) => void;
  }) => {
    if (content.length <= wordLimit) {
      return <p className="whitespace-pre-line sm:h-28 xl:h-24">{content}</p>;
    }
    return (
      <p className="whitespace-pre-line h-auto">
        {showMore ? `${content} ` : `${content.slice(0, wordLimit)}... `}
        <a
          onClick={() => setShowMore(!showMore)}
          className="primary-font-color hover:underline"
        >
          read {showMore ? "less" : "more"}
        </a>
      </p>
    );
  };
  return (
    <div
      className="w-full grid grid-cols-1 gap-5 rounded-lg shadow-md p-4 my-5"
      key={review._id}
    >
      <p className="text-xl font-bold font-sans text-black text-center md:text-left">
        {review.reviewer}
      </p>
      <span className="text-2xl text-yellow-500">
        <ImQuotesLeft />
      </span>
      {readMore({
        content: review.body,
        wordLimit: 150,
        showMore,
        setShowMore,
      })}
      <div className="flex gap-1 text-yellow-500 text-2xl">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  );
};

export default SubFeedbackChild;
