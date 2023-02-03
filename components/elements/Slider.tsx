import ReactrSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "hooks/useWindowSize";

const Slider = ({
  sm,
  md,
  lg,
  xl,
  children,
}: {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  children: any;
}) => {
  const { isSm, isMd, isLg, isXl } = useWindowSize();
  const settings = {
    dots: true,
    arrows: isXl ? true : false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: isSm ? sm : isMd ? md : isLg ? lg : xl,
    slidesToScroll: isSm ? sm : isMd ? md : isLg ? lg : xl,
  };
  return <ReactrSlider {...settings}>{children}</ReactrSlider>;
};

export default Slider;
