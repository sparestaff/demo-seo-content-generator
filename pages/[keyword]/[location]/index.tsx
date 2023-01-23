import HeroSectionWithLocation from "features/location/components/HeroSectionWithLocation";
import BusinessDescriptionWithLocation from "features/location/components/BusinessDescriptionWithLocation";
import BusinessDescriptionWithLocation2 from "features/location/components/BusinessDescriptionWithLocation2";

import BreadCrumbs from "features/keyword/components/BreadCrumbs";
import Rates from "features/keyword/components/Rates";
import Services from "features/keyword/components/Services";
import BusinessDescription2 from "features/keyword/components/BusinessDescription2";
import BusinessDescription3 from "features/keyword/components/BusinessDescription3";
import ColumnContent1 from "features/keyword/components/ColumnContent1";
import ColumnContent2 from "features/keyword/components/ColumnContent2";
import ColumnContent3 from "features/keyword/components/ColumnContent3";
import ColumnContent4 from "features/keyword/components/ColumnContent4";
import BusinessDescription4 from "features/keyword/components/BusinessDescription4";
import MainFeedback from "features/keyword/components/MainFeedback";
import SubFeedback from "features/keyword/components/SubFeedback";
import FAQ from "features/keyword/components/FAQ";
import Articles from "features/keyword/components/Articles";
import ServiceAreas from "features/keyword/components/ServiceAreas";
import BottomContent from "features/keyword/components/BottomContent";
// type
import { CustomContent } from "types/CustomContent";
// api
import { getCustomContentsWithLocation } from "features/location/API/services";
import { getLocations } from "features/keyword/API/services";
import { useRouter } from "next/router";

const KeywordPillarPage = ({
  result,
  locations,
}: {
  result: CustomContent;
  locations: Location;
}) => {
  const router = useRouter();
  const keyword = router.query.keyword?.toString().replace(/-/g, " ");
  const location = router.query.location?.toString().replace(/-/g, " ");

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
      <BusinessDescription3
        keyword={keyword}
        location={location}
        content1={result?.content12}
        content2={result?.content13}
      />
      <ColumnContent1
        keyword={keyword}
        location={location}
        content1={result?.content7}
        content2={result?.content8}
        content3={result?.content9}
        content4={result?.content10}
        content5={result?.content11}
      />
      <ColumnContent2
        keyword={keyword}
        content1={result?.content14}
        content2={result?.content15}
      />
      <ColumnContent3
        keyword={keyword}
        content1={result?.content16}
        content2={result?.content17}
      />
      <BusinessDescription4 keyword={keyword} content={result?.content20} />
      <MainFeedback keyword={keyword} content={result?.content21} />
      <SubFeedback />
      <FAQ keyword={keyword} content={result?.content22} />
      <Articles keyword={keyword} content={result?.content23} />
      <ServiceAreas keyword={keyword} content={result?.content24} />
      <BottomContent keyword={keyword} content={result?.content25} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const keyword: string = context.query.keyword.toString().replace(/-/g, " ");
  const locationQuery: string = context.query.location
    .toString()
    .replace(/-/g, " ");

  const result = await getCustomContentsWithLocation(keyword, locationQuery);
  const location = await getLocations(locationQuery);

  return {
    props: {
      result,
      location,
    },
  };
}

export default KeywordPillarPage;
