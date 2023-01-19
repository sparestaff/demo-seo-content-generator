import Button from "antd/lib/button";

const BottomContent = () => {
  return (
    <div className="text-center bg-seo-primary py-20 px-5 sm:px-5 md:px-5 lg:px-5 lg:px-5">
      <h2 className="text-6xl text-white font-bold font-sans">
        Custom content #25 | Need keyword?
      </h2>
      <div className="flex justify-center gap-10 pt-10">
        <Button
          type="primary"
          shape="round"
          size="large"
          className="bg-white text-seo-primary"
        >
          Get quotes
        </Button>
        <Button
          href="tel:1800858382"
          type="primary"
          shape="round"
          size="large"
          className="bg-transparent border-white text-white"
        >
          Call: 1800 85 83 82
        </Button>
      </div>
    </div>
  );
};

export default BottomContent;
