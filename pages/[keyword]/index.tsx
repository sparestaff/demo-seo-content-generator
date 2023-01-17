import BreadCrumbs from "features/keyword/components/BreadCrumbs";
import HeroSection from "features/keyword/components/HeroSection";
import Rates from "features/keyword/components/Rates";
import BusinessDescription from "features/keyword/components/BusinessDescription";
import Services from "features/keyword/components/Services";
import BusinessDescription2 from "features/keyword/components/BusinessDescription2";
import ColumnContent1 from "features/keyword/components/ColumnContent1";

const KeywordPillarPage = () => {
  return (
    <>
      <HeroSection />
      <Rates />
      <BreadCrumbs />
      <BusinessDescription />
      <Services />
      <BusinessDescription2 />
      <ColumnContent1 />
    </>
  );
};

export default KeywordPillarPage;
