import HeroSectionWithLocation from "features/location/components/HeroSectionWithLocation";
import BusinessDescriptionWithLocation from "features/location/components/BusinessDescriptionWithLocation";
import BusinessDescriptionWithLocation2 from "features/location/components/BusinessDescriptionWithLocation2";
import BusinessDescriptionWithLocation3 from "features/location/components/BusinessDescriptionWithLocation3";
import BusinessDescriptionWithLocation4 from "features/location/components/BusinessDescriptionWithLocation4";
import ColumnContentWithLocation1 from "features/location/components/ColumnContentWithLocation1";
import ColumnContentWithLocation2 from "features/location/components/ColumnContentWithLocation2";
import ColumnContentWithLocation3 from "features/location/components/ColumnContentWithLocation3";
import ColumnContentWithLocation4 from "features/location/components/ColumnContentWithLocation4";
import ColumnContentWithLocation5 from "features/location/components/ColumnContentWithLocation5";
import ColumnContentWithLocation6 from "features/location/components/ColumnContentWithLocation6";
import ColumnContentWithLocation7 from "features/location/components/ColumnContentWithLocation7";
import Faq from "components/elements/FAQ";
import BreadCrumbs from "components/elements/BreadCrumbs";
import Rates from "components/elements/Rates";
import Services from "components/elements/Services";
import MainFeedback from "components/elements/MainFeedback";
import SubFeedback from "components/elements/SubFeedback";
import Articles from "components/elements/Articles";
import ServiceAreas from "components/elements/ServiceAreas";
import BottomContent from "components/elements/BottomContent";
// type
import { CustomContent } from "types/CustomContent";
// api
import { getCustomContentsWithLocation } from "features/location/API/services";
import {
  getLocations,
  getRandomFAQs,
  getRandomReviews,
} from "features/keyword/API/services";
import { useRouter } from "next/router";
import Header from "components/layout/Header";
import type { FAQ } from "types/FAQ";
import { Review } from "types/Review";
import { Location } from "types/Location";

const KeywordPillarPage = ({
  result,
  locationData,
  faqs,
  reviews,
}: {
  result: CustomContent;
  locationData: Location;
  faqs: FAQ[];
  reviews: Review[];
}) => {
  const router = useRouter();
  const keyword = router.query.keyword?.toString().replace(/-/g, " ") as string;
  const location = router.query.location
    ?.toString()
    .replace(/-/g, " ") as string;

  return (
    <>
      <Header keyword={keyword} location={location} />
      <HeroSectionWithLocation
        keyword={keyword}
        location={location}
        content1={result?.content1}
        content2={result?.content2}
        image={result?.image1}
      />
      <Rates />
      <BreadCrumbs
        keyword={keyword}
        location={location}
        region={locationData?.region}
      />
      <BusinessDescriptionWithLocation
        keyword={keyword}
        location={location}
        content3={result?.content3}
        content4={result?.content4}
      />
      <Services keyword={keyword} location={location} />
      <BusinessDescriptionWithLocation2
        keyword={keyword}
        location={location}
        content5={result?.content5}
        content6={result?.content6}
        image={result?.image2}
      />
      <BusinessDescriptionWithLocation3 keyword={keyword} location={location} />
      <ColumnContentWithLocation1 keyword={keyword} location={location} />
      <ColumnContentWithLocation2
        keyword={keyword}
        location={location}
        image={result?.image3}
      />
      <ColumnContentWithLocation3 keyword={keyword} image={result?.image4} />
      <ColumnContentWithLocation4 keyword={keyword} location={location} />
      <ColumnContentWithLocation5
        keyword={keyword}
        location={location}
        content1={result?.content7}
        content2={result?.content8}
        image={result?.image5}
      />
      <ColumnContentWithLocation6
        keyword={keyword}
        location={location}
        content1={result?.content9}
        content2={result?.content10}
        image={result?.image6}
      />
      <BusinessDescriptionWithLocation4 keyword={keyword} location={location} />
      <MainFeedback
        keyword={keyword}
        reviewer={reviews[reviews.length - 1].reviewer}
      />
      <SubFeedback reviews={reviews.slice(0, reviews.length - 1)} />
      <ColumnContentWithLocation7 keyword={keyword} location={location} />
      <Faq keyword={keyword} location={location} faqs={faqs} />
      <Articles keyword={keyword} content={result?.content11} />
      <ServiceAreas
        keyword={keyword}
        content={result?.content12}
        location={location}
        locationData={locationData}
      />
      <BottomContent keyword={keyword} location={location} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const keyword: string = context.query.keyword.toString().replace(/-/g, " ");
  const locationQuery: string = context.query.location
    .toString()
    .replace(/-/g, " ");

  const [result, locationData, faqs, reviews] = await Promise.all([
    getCustomContentsWithLocation(keyword, locationQuery),
    getLocations(locationQuery),
    getRandomFAQs(),
    getRandomReviews(),
  ]);
  return {
    props: {
      result,
      locationData,
      faqs,
      reviews,
    },
  };
}

export default KeywordPillarPage;
