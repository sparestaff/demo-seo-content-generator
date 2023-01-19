import { useRouter } from "next/router";
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

const KeywordPillarPage = () => {
  const router = useRouter();
  const keyword = router?.query?.keyword?.toString();
  let content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
    content8,
    content9,
    content10,
    content11,
    content12,
    content13,
    content14,
    content15,
    content16,
    content17,
    content18,
    content19,
    content20,
    content21,
    content22,
    content23,
    content24,
    content25;

  return (
    <>
      <HeroSection keyword={keyword} content1={content1} content2={content2} />
      <Rates />
      <BreadCrumbs keyword={keyword} />
      <BusinessDescription
        keyword={keyword}
        content3={content3}
        content4={content4}
      />
      <Services keyword={keyword} />
      <BusinessDescription2
        keyword={keyword}
        content5={content5}
        content6={content6}
      />
      <ColumnContent1
        keyword={keyword}
        content7={content7}
        content8={content8}
        content9={content9}
        content10={content10}
        content11={content11}
      />
      <BusinessDescription3
        keyword={keyword}
        content12={content12}
        content13={content13}
      />
      <ColumnContent2 content14={content14} content15={content15} />
      <ColumnContent3 content16={content16} content17={content17} />
      <ColumnContent4
        keyword={keyword}
        content18={content18}
        content19={content19}
      />
      <BusinessDescription4 content20={content20} />
      <MainFeedback content21={content21} />
      <SubFeedback />
      <FAQ content22={content22} />
      <Articles content23={content23} />
      <ServiceAreas keyword={keyword} content24={content24} />
      <BottomContent keyword={keyword} content25={content25} />
    </>
  );
};

export default KeywordPillarPage;
