import Slider from "components/elements/Slider";
import SubFeedbackChild from "./SubFeedbackChild";
import { Review } from "types/Review";

const SubFeedback = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="py-10 my-10 bg-gray-100/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <Slider sm={1} md={2} lg={3} xl={3}>
          {reviews?.length
            ? reviews.map((review) => (
                <SubFeedbackChild review={review} key={review._id} />
              ))
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default SubFeedback;
