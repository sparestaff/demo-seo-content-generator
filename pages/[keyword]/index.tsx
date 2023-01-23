import { useRouter } from "next/router";
// components
import BreadCrumbs from "features/keyword/components/BreadCrumbs";
import HeroSection from "features/keyword/components/HeroSection";
import Rates from "features/keyword/components/Rates";
import BusinessDescription from "features/keyword/components/BusinessDescription";
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
import { getCustomContents, getLocations } from "features/keyword/API/services";
import { Location } from "types/Location";

const KeywordPillarPage = ({
  result,
  locations,
}: {
  result: CustomContent;
  locations?: Location;
}) => {
  const router = useRouter();
  const keyword = router?.query?.keyword?.toString().replace(/-/g, " ");

  return (
    <>
      <HeroSection
        keyword={keyword}
        location={result?.location}
        content1={result?.content1}
        content2={result?.content2}
      />
      <Rates />
      <BreadCrumbs keyword={keyword} />
      <BusinessDescription
        keyword={keyword}
        location={result?.location}
        content1={result?.content3}
        content2={result?.content4}
      />
      <Services keyword={keyword} />
      <BusinessDescription2
        keyword={keyword}
        location={result?.location}
        content1={result?.content5}
        content2={result?.content6}
      />
      <ColumnContent1
        keyword={keyword}
        location={result?.location}
        content1={result?.content7}
        content2={result?.content8}
        content3={result?.content9}
        content4={result?.content10}
        content5={result?.content11}
      />
      <BusinessDescription3
        keyword={keyword}
        location={result?.location}
        content1={result?.content12}
        content2={result?.content13}
      />
      <ColumnContent2
        keyword={keyword}
        location={result?.location}
        content1={result?.content14}
        content2={result?.content15}
      />
      <ColumnContent3
        keyword={keyword}
        location={result?.location}
        content1={result?.content16}
        content2={result?.content17}
      />
      <ColumnContent4
        keyword={keyword}
        location={result?.location}
        content1={result?.content18}
        content2={result?.content19}
      />
      <BusinessDescription4
        keyword={keyword}
        location={result?.location}
        content={result?.content20}
      />
      <MainFeedback
        keyword={keyword}
        location={result?.location}
        content={result?.content21}
      />
      <SubFeedback />
      <FAQ
        keyword={keyword}
        location={result?.location}
        content={result?.content22}
      />
      <Articles
        keyword={keyword}
        location={result?.location}
        content={result?.content23}
      />
      <ServiceAreas
        keyword={keyword}
        location={locations}
        content={result?.content24}
      />
      <BottomContent
        keyword={keyword}
        location={result?.location}
        content={result?.content25}
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const keyword: string = context.query.keyword.toString().replace(/-/g, " ");
  const result = (await getCustomContents(keyword)) as CustomContent;
  let location;
  if (result?.location) {
    location = (await getLocations(result?.location)) as Location;
  }

  return {
    props: {
      result,
      location,
    },
  };
}

export default KeywordPillarPage;
