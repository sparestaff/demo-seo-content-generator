import Image from "next/image";
import Button from "antd/lib/button";

const BottomContent = ({
  keyword,
  content25,
}: {
  keyword: string | undefined;
  content25: string | undefined;
}) => {
  return (
    <div className="bg-seo-primary px-5 sm:px-5 md:px-5 lg:px-5">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <h2 className="text-6xl text-white font-bold font-sans">
            {content25 ?? `Need ${keyword}?`}
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
        <div>
          <Image
            src="https://res.cloudinary.com/dn9dk0tls/image/upload/v1674172022/seo-content-generator-mvp/customers-reaching-for-computer-repairs_vam9x6.webp"
            alt="customers-reaching-for-computer-repairs"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
