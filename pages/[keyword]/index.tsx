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
  return (
    <>
      <HeroSection keyword={keyword} />
      <Rates />
      <BreadCrumbs keyword={keyword} />
      <BusinessDescription keyword={keyword} />
      <Services keyword={keyword} />
      <BusinessDescription2 keyword={keyword} />
      <ColumnContent1 />
      <BusinessDescription3 keyword={keyword} />
      <ColumnContent2 />
      <ColumnContent3 />
      <ColumnContent4 keyword={keyword} />
      <BusinessDescription4 />
      <MainFeedback />
      <SubFeedback />
      <FAQ />
      <Articles />
      <ServiceAreas keyword={keyword} />
      <BottomContent keyword={keyword} />
    </>
  );
};

export default KeywordPillarPage;
