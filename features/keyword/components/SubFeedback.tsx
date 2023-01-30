import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { Review } from "types/Review";

const SubFeedback = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="py-10 my-10 bg-gray-100/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        {reviews?.length
          ? reviews.map((review) => (
              <div
                className="grid grid-cols-1 gap-5 bg-white rounded shadow px-5 py-10"
                key={review._id}
              >
                <p className="text-xl font-bold font-sans text-black text-center md:text-left">
                  {review.reviewer}
                </p>
                <span className="text-2xl text-yellow-500">
                  <ImQuotesLeft />
                </span>
                <p>{review.body}</p>
                <div className="flex gap-1 text-yellow-500 text-2xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SubFeedback;
