import { useRouter } from "next/router";
// components
import BreadCrumbs from "components/elements/BreadCrumbs";
import HeroSection from "features/keyword/components/HeroSection";
import Rates from "components/elements/Rates";
import BusinessDescription from "features/keyword/components/BusinessDescription";
import Services from "components/elements/Services";
import BusinessDescription2 from "features/keyword/components/BusinessDescription2";
import BusinessDescription3 from "features/keyword/components/BusinessDescription3";
import ColumnContent1 from "features/keyword/components/ColumnContent1";
import ColumnContent2 from "features/keyword/components/ColumnContent2";
import ColumnContent3 from "features/keyword/components/ColumnContent3";
import ColumnContent4 from "features/keyword/components/ColumnContent4";
import BusinessDescription4 from "features/keyword/components/BusinessDescription4";
import MainFeedback from "components/elements/MainFeedback";
import SubFeedback from "components/elements/SubFeedback";
import Faq from "components/elements/FAQ";
import Articles from "components/elements/Articles";
import ServiceAreas from "components/elements/ServiceAreas";
import BottomContent from "components/elements/BottomContent";
import Header from "components/layout/Header";
// type
import { CustomContent } from "types/CustomContent";
// api
import {
  getCustomContents,
  getRegions,
  getRandomFAQs,
  getRandomReviews,
} from "features/keyword/API/services";
import { FAQ } from "types/FAQ";
import { Review } from "types/Review";

const KeywordPillarPage = ({
  result,
  regions,
  faqs,
  reviews,
}: {
  result: CustomContent;
  regions: { region: string }[];
  faqs: FAQ[];
  reviews: Review[];
}) => {
  const router = useRouter();
  const keyword = router?.query?.keyword
    ?.toString()
    .replace(/-/g, " ") as string;

  return (
    <>
      <Header keyword={keyword} />
      <HeroSection
        keyword={keyword}
        content1={result?.content1}
        content2={result?.content2}
        image={result?.image1}
      />
      <Rates />
      <BreadCrumbs keyword={keyword} />
      <BusinessDescription
        keyword={keyword}
        content1={result?.content3}
        content2={result?.content4}
      />
      <Services keyword={keyword} />
      <BusinessDescription2
        keyword={keyword}
        content1={result?.content5}
        content2={result?.content6}
      />
      <ColumnContent1
        keyword={keyword}
        content1={result?.content7}
        content2={result?.content8}
        content3={result?.content9}
        content4={result?.content10}
        content5={result?.content11}
        image={result?.image2}
      />
      <BusinessDescription3
        keyword={keyword}
        content1={result?.content12}
        content2={result?.content13}
      />
      <ColumnContent2
        keyword={keyword}
        content1={result?.content14}
        content2={result?.content15}
        image={result?.image3}
      />
      <ColumnContent3
        keyword={keyword}
        content1={result?.content16}
        content2={result?.content17}
        image={result?.image4}
      />
      <ColumnContent4
        keyword={keyword}
        content1={result?.content18}
        content2={result?.content19}
        image={result?.image5}
      />
      <BusinessDescription4 keyword={keyword} content={result?.content20} />
      <MainFeedback keyword={keyword} content={result?.content21} />
      <SubFeedback reviews={reviews} />
      <Faq keyword={keyword} content={result?.content22} faqs={faqs} />
      <Articles keyword={keyword} content={result?.content23} />
      <ServiceAreas
        keyword={keyword}
        content={result?.content24}
        regions={regions}
      />
      <BottomContent keyword={keyword} content={result?.content25} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const keyword: string = context.query.keyword.toString().replace(/-/g, " ");
  const [result, regions, faqs, reviews] = await Promise.all([
    getCustomContents(keyword),
    getRegions(),
    getRandomFAQs(),
    getRandomReviews(),
  ]);
  return {
    props: {
      result,
      regions,
      faqs,
      reviews,
    },
  };
}

export default KeywordPillarPage;
