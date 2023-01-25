import HeroSectionWithLocation from "features/location/components/HeroSectionWithLocation";
import BusinessDescriptionWithLocation from "features/location/components/BusinessDescriptionWithLocation";
import BusinessDescriptionWithLocation2 from "features/location/components/BusinessDescriptionWithLocation2";
import BusinessDescriptionWithLocation3 from "features/location/components/BusinessDescriptionWithLocation3";
import ColumnContentWithLocation1 from "features/location/components/ColumnContentWithLocation1";
import ColumnContentWithLocation2 from "features/location/components/ColumnContentWithLocation2";
import ColumnContentWithLocation3 from "features/location/components/ColumnContentWithLocation3";
import ColumnContentWithLocation4 from "features/location/components/ColumnContentWithLocation4";
import FAQWithLocation from "features/location/components/FAQWithLocation";

import BreadCrumbs from "features/keyword/components/BreadCrumbs";
import Rates from "features/keyword/components/Rates";
import Services from "features/keyword/components/Services";
import ColumnContent3 from "features/keyword/components/ColumnContent3";
import MainFeedback from "features/keyword/components/MainFeedback";
import SubFeedback from "features/keyword/components/SubFeedback";
import Articles from "features/keyword/components/Articles";
import ServiceAreas from "features/keyword/components/ServiceAreas";
import BottomContent from "features/keyword/components/BottomContent";
// type
import { CustomContent } from "types/CustomContent";
// api
import { getCustomContentsWithLocation } from "features/location/API/services";
import { getLocationsByKeyword } from "features/keyword/API/services";
import { useRouter } from "next/router";
import ColumnContent2 from "features/keyword/components/ColumnContent2";

const KeywordPillarPage = ({
  result,
  locations,
}: {
  result: CustomContent;
  locations: string[];
}) => {
  const router = useRouter();
  const keyword = router.query.keyword?.toString().replace(/-/g, " ") as string;
  const location = router.query.location
    ?.toString()
    .replace(/-/g, " ") as string;

  return (
    <>
      <HeroSectionWithLocation
        keyword={keyword}
        location={location}
        content1={result?.content1}
        content2={result?.content2}
      />
      <Rates />
      <BreadCrumbs keyword={keyword} location={location} />
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
      />
      <BusinessDescriptionWithLocation3 keyword={keyword} location={location} />
      <ColumnContentWithLocation1 keyword={keyword} location={location} />
      <ColumnContentWithLocation2 keyword={keyword} location={location} />
      <ColumnContentWithLocation3 keyword={keyword} location={location} />
      <ColumnContent2
        keyword={keyword}
        location={location}
        content1={result?.content7}
        content2={result?.content8}
      />
      <ColumnContent3
        keyword={keyword}
        content1={result?.content9}
        content2={result?.content10}
      />
      <MainFeedback keyword={keyword} />
      <SubFeedback />
      <ColumnContentWithLocation4 keyword={keyword} location={location} />
      <FAQWithLocation keyword={keyword} />
      <Articles keyword={keyword} content={result?.content11} />
      <ServiceAreas
        keyword={keyword}
        location={location}
        locations={locations}
        content={result?.content12}
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

  const result = await getCustomContentsWithLocation(keyword, locationQuery);
  const locations = await getLocationsByKeyword(keyword);

  return {
    props: {
      result,
      locations,
    },
  };
}

export default KeywordPillarPage;