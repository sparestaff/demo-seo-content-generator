import Slider from "components/elements/Slider";
import SubFeedbackChild from "./SubFeedbackChild";
import { Review } from "types/Review";

const SubFeedback = ({ reviews }: { reviews: Review[] }) => {
  // Hard-coded reviews
  const hardCodedReviews = [
    {
      _id: "1",
      reviewer: "John Smith",
      body: "This product is amazing! Will recommend to friends.",
      stars: 5,
    },
    {
      _id: "2",
      reviewer: "Jane Doe",
      body: "I'm very satisfied with your services and will use your services again for our next projects.",
      stars: 4,
    },
    {
      _id: "3",
      reviewer: "Bob Johnson",
      body: "Great customer service! I called and the lady on the phone was very helpful.",
      stars: 4,
    },
    {
      _id: "4",
      reviewer: "Alice Smith",
      body: "This is the best company I have ever used. The project was completed promptly and professionally.",
      stars: 5,
    },
    {
      _id: "5",
      reviewer: "Tom Anderson",
      body: "I'm extremely happy with their services. I was kept informed every step along the way. Recommended.",
      stars: 5,
    },
  ];

  // Concatenate the hard-coded reviews with the database reviews
  const allReviews = [...hardCodedReviews, ...(reviews || [])];

  return (
    <div className="py-10 my-10 bg-gray-100/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
        <Slider sm={1} md={2} lg={3} xl={3}>
          {allReviews.length
            ? allReviews.map((review) => (
                <SubFeedbackChild review={review} key={review._id} />
              ))
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default SubFeedback;
