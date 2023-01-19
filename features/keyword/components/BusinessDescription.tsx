import Button from "antd/lib/button";

const BusinessDescription = ({
  keyword,
  content3,
  content4,
}: {
  keyword: string | undefined;
  content3: string | undefined;
  content4: string | undefined;
}) => {
  return (
    <div className="text-center max-w-6xl mx-auto">
      <h3 className="text-3xl text-black font-bold font-sans">
        {content3 ?? `Top rated ${keyword} since 2004`}
      </h3>
      <p className="py-5 w-4/5 mx-auto">
        {content4 ??
          `Safemode Computer Service is your trusted ${keyword}
        and IT services in Sydney. Our computer technicians have fixed thousands
        of problems on PC computers, Apple Mac for home and small businesses.
        That's why 9.4/10 customers recommend Safemode Computer Service to
        their friends and family.`}
      </p>
      <div>
        <Button type="primary" size="large" shape="round">
          Get a Quick Quote
        </Button>
      </div>
    </div>
  );
};

export default BusinessDescription;
