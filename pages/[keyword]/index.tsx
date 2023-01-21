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
import { CustomContent } from "types/customContent";
// api
import { getCustomContents } from "features/keyword/API/services";

const KeywordPillarPage = ({ result }: { result: CustomContent }) => {
  const router = useRouter();
  const keyword = router?.query?.keyword?.toString().replace(/-/g, " ");
  const location = router?.query?.location?.toString().replace(/-/g, " ");

  return (
    <>
      <HeroSection
        keyword={keyword}
        location={location}
        content1={result?.content1}
        content2={result?.content2}
      />
      <Rates />
      <BreadCrumbs keyword={keyword} />
      <BusinessDescription
        keyword={keyword}
        location={location}
        content3={result?.content3}
        content4={result?.content4}
      />
      <Services keyword={keyword} />
      <BusinessDescription2
        keyword={keyword}
        location={location}
        content5={result?.content5}
        content6={result?.content6}
      />
      <ColumnContent1
        keyword={keyword}
        location={location}
        content7={result?.content7}
        content8={result?.content8}
        content9={result?.content9}
        content10={result?.content10}
        content11={result?.content11}
      />
      <BusinessDescription3
        keyword={keyword}
        location={location}
        content12={result?.content12}
        content13={result?.content13}
      />
      <ColumnContent2
        keyword={keyword}
        location={location}
        content14={result?.content14}
        content15={result?.content15}
      />
      <ColumnContent3
        keyword={keyword}
        location={location}
        content16={result?.content16}
        content17={result?.content17}
      />
      <ColumnContent4
        keyword={keyword}
        location={location}
        content18={result?.content18}
        content19={result?.content19}
      />
      <BusinessDescription4
        keyword={keyword}
        location={location}
        content20={result?.content20}
      />
      <MainFeedback
        keyword={keyword}
        location={location}
        content21={result?.content21}
      />
      <SubFeedback />
      <FAQ
        keyword={keyword}
        location={location}
        content22={result?.content22}
      />
      <Articles
        keyword={keyword}
        location={location}
        content23={result?.content23}
      />
      <ServiceAreas
        keyword={keyword}
        location={location}
        content24={result?.content24}
      />
      <BottomContent
        keyword={keyword}
        location={location}
        content25={result?.content25}
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const keyword: string = context.query.keyword.toString().replace(/-/g, " ");
  const result = await getCustomContents(keyword);

  return {
    props: {
      result,
    },
  };
}

export default KeywordPillarPage;
