import ReactrSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "hooks/useWindowSize";

const Slider = ({ children }: any) => {
  const { isSm, isMd, isLg } = useWindowSize();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isSm ? 2 : isMd || isLg ? 3 : 4,
    slidesToScroll: 1,
  };
  return <ReactrSlider {...settings}>{children}</ReactrSlider>;
};

export default Slider;
